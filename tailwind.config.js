/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colors: {
          // Primary color for both light and dark modes
          primary: {
            light: '#3b82f6', // Blue for light mode
            dark: '#2563eb', // Slightly deeper blue for dark mode
            DEFAULT: '#3b82f6', // Default color
          },
          // Accent color for highlighting important UI elements
          accent: {
            light: '#f59e0b', // Amber for light mode (e.g., Add Task button)
            dark: '#d97706', // Slightly darker amber for dark mode
            DEFAULT: '#f59e0b',
          },
          // Background color for the entire app in both modes
          background: {
            light: '#f3f4f6', // Light gray for light mode
            dark: '#1f2937', // Dark gray for dark mode
            DEFAULT: '#f3f4f6',
          },
          // Text color for headings and main text
          text: {
            light: '#111827', // Dark text for light mode
            dark: '#f3f4f6', // Light text for dark mode
            DEFAULT: '#111827',
          },
          // Subtle border color for structuring UI
          border: {
            light: '#e5e7eb', // Light border for light mode
            dark: '#4b5563', // Dark border for dark mode
            DEFAULT: '#e5e7eb',
          },
          // A color for marking tasks as completed (success state)
          success: {
            light: '#10b981', // Green for completed tasks in light mode
            dark: '#059669', // Darker green for dark mode
            DEFAULT: '#10b981',
          },
          // A color for important notifications (warning state)
          warning: {
            light: '#ef4444', // Red for warnings in light mode
            dark: '#dc2626', // Darker red for dark mode
            DEFAULT: '#ef4444',
          },
        },
      },
    },
  },
  plugins: [],
}

