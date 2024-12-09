export const TYPING_DELAY = 50;
export const LOADING_STEP_DELAY = 300;
export const ERROR_DISPLAY_DURATION = 7000;
export const ERROR_PAUSE_DURATION = 7000;
export const FINAL_WAIT_DURATION = 4000;

export const command = 'npm run dev';

export const loadingSteps = [
  '> Starting development server...',
  '> Compiling assets...',
  '> Connecting to database...',
];

export const errorSteps = [
  '> ERROR: Failed to connect to database',
  '> ERROR: Missing module: \'express\'',
  '> ERROR: Package.json not found',
  '> ERROR: Invalid configuration in tsconfig.json',
 
];

export const finalStep = '> Just Kidding! Site Loading...';