# 6 Stars Custom Chart Builder

A powerful development environment for creating, testing, and packaging custom chart components for Business Intelligence dashboards.

## Overview

![5stars](https://github.com/user-attachments/assets/fd85d4bb-475e-40c3-835c-70b39cefa71f)

This Custom Chart Builder soltution provides a complete workflow for developing custom chart visualizations. This toolkit includes:

- An interactive development environment with live preview
- Configurable data slots for chart customization
- Automatic build and refresh on code changes
- Schema validation for chart configuration
- Production-ready packaging tools

## Quick Start

### Prerequisites

- Node.js (v16+)
- npm

### Installation

1. Clone the repository:

2. Install dependencies:
   ```bash
   npm install
   ```
   
   This will automatically install dependencies for both the root project and the custom chart component.

### Development

Start the development environment with a single command:

```bash
npm run start
```

This command launches:
- The Angular development server
- A bundle server for custom chart assets
- A file watcher that rebuilds on changes

Your development environment will be available at [http://localhost:4200](http://localhost:4200)


When you first access the development environment, you'll be presented with a login page. You'll need to log in with your Luzmo account credentials

After successful authentication, you'll be redirected to the chart builder environment where you can access and use your Luzmo datasets to test your custom chart

## Project Structure

```
custom-chart-builder/
├── custom-chart-build-output/  # Production build files
├── projects/
│   ├── builder/               # Angular application for the chart builder UI
│   └── custom-chart/          # Custom chart implementation
│       └── src/
│           ├── chart.ts       # Main chart rendering logic
│           ├── chart.css      # Chart styles
│           ├── manifest.json  # Chart configuration and slot definitions
│           ├── icon.svg       # Chart icon
│           └── index.ts       # Entry point
```
