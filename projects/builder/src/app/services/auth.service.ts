import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import type { Observable } from 'rxjs';
import { BehaviorSubject, take } from 'rxjs';
import { map } from 'rxjs/operators';
import type { AuthResponse, RowsData, User } from '../helpers/types';
import { isBoolean, isEmpty } from '../helpers/types.utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user?: User;
  private httpClient = inject(HttpClient);
  private cookieService = inject(CookieService);
  private cookies: Record<string, string> = this.cookieService.getAll();
  private appUrl = 'https://app.luzmo.com';
  private apiUrl = 'https://api.luzmo.com';
  private authenticated =
    !isEmpty(this.cookies['k']) &&
    !isEmpty(this.cookies['t']) &&
    !isEmpty(this.cookies['e']) &&
    new Date(Number.parseInt(this.cookies['e'], 10)) >= new Date();
  isAuthenticated$ = new BehaviorSubject<boolean>(this.authenticated);

  setAuthenticated(value: boolean, user?: AuthResponse['user'] | User): void {
    if (!isBoolean(value)) {
      return;
    }

    const cookieDomain = 'localhost';

    if (value === false) {
      // Remove login cookies when logging out.
      for (const cookieKey of ['k', 't', 'e']) {
        this.cookieService.delete(cookieKey, '/', cookieDomain);
      }
    } else if (user && this.isAuthResponse(user) && !isEmpty(user.token)) {
      // Set login cookies when logging in.
      const cookieExpiry = new Date(user.token.cookieExpiry);
      this.setLoginCookies(
        user.token.id,
        user.token.token,
        user.token.tokenExpiry,
        cookieExpiry
      );
    }

    this.authenticated = value;
    this.isAuthenticated$.next(value);
  }

  setLoginCookies(
    key: string,
    token: string,
    expiry: string,
    cookieExpiry: Date
  ): void {
    const cookieDomain = 'localhost';
    this.cookieService.set(
      'k',
      key,
      cookieExpiry,
      '/',
      cookieDomain,
      false,
      'Lax'
    );
    this.cookieService.set(
      't',
      token,
      cookieExpiry,
      '/',
      cookieDomain,
      false,
      'Lax'
    );
    this.cookieService.set(
      'e',
      expiry,
      cookieExpiry,
      '/',
      cookieDomain,
      false,
      'Lax'
    );
  }

  getLoginCookies(): Record<'key' | 'token', string> {
    return {
      key: this.cookieService.get('k'),
      token: this.cookieService.get('t')
    };
  }

  getOrLoadUser(): Observable<User | null> {
    return this.user ? of(this.user) : this.loadUser();
  }

  loadUser(uid = 'me'): Observable<User | null> {
    console.log('-- loading user');
    return this.httpClient
      .post<RowsData<User>>(
        `${this.apiUrl}/0.1.0/user`,
        {
          action: 'get',
          version: '0.1.0',
          key: this.cookieService.get('k'),
          token: this.cookieService.get('t'),
          find: {
            where: { id: uid },
            include: [{ model: 'Organization', attributes: ['id', 'name'] }]
          }
        },
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .pipe(
        take(1),
        map((result) => {
          if (!result.rows?.length) {
            this.setAuthenticated(false);
            return null;
          }

          return this.onLoadUser(result);
        })
      );
  }

  getUser(): User {
    return this.user || ({} as User);
  }

  setUser(value: User): User {
    return (this.user = { ...value });
  }

  getAppUrl(): string {
    return this.appUrl;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  setAppUrl(value: string): void {
    this.appUrl = value;
  }

  setApiUrl(value: string): void {
    this.apiUrl = value;
  }

  private onLoadUser(result: RowsData<User>): User {
    const [user] = result.rows;

    // If the user is missing an organization, mark as unauthenticated.
    if (!user.organizations?.[0]) {
      this.setAuthenticated(false);

      return user;
    }

    this.setUser(user);
    this.setAuthenticated(true);

    return this.user as User;
  }

  private isAuthResponse(
    user: AuthResponse['user'] | User
  ): user is AuthResponse['user'] {
    return (user as AuthResponse['user']).token !== undefined;
  }
}
