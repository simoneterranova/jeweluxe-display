# Jeweluxe Display - Modern Jewelry Website

A sophisticated goldsmith website built with modern web technologies, featuring an elegant UI design and seamless user experience for showcasing jewelry collections and services.

## Technology Stack

This project leverages cutting-edge technologies:

- **React 18** - For building a dynamic and responsive user interface
- **TypeScript** - For type-safe development
- **Vite** - For fast development and optimized builds
- **Tailwind CSS** - For utility-first styling
- **shadcn/ui** - For beautiful and accessible UI components
- **Lucide Icons** - For high-quality icons
- **React Router DOM** - For client-side routing

## Key Features

- 🎨 Modern and elegant UI design
- 💎 Interactive product showcase
- 🛠️ Comprehensive service section
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 👥 About us section with company values
- 📞 Contact form integration

## Project Structure

```
src/
  ├── components/     # React components
  ├── pages/          # Page components
  ├── hooks/          # Custom React hooks
  ├── lib/            # Utility functions
  └── App.tsx         # Main application component
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd jeweluxe-display
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development Guidelines

### Component Structure

- Components are organized in the `src/components` directory
- Each component follows a modular structure
- UI components utilize shadcn/ui for consistent styling
- Custom hooks are stored in `src/hooks`

### Styling

- Tailwind CSS is used for styling
- Custom utility classes are defined in `src/index.css`
- The project uses a custom color palette with gold and cream themes

### TypeScript

- Strict type checking is enabled
- Type definitions are included for all components
- Custom types are defined where necessary

## Deployment

The project can be deployed using any static hosting service. To build for production:

1. Run the build command:
```bash
npm run build
```

2. The built files will be in the `dist` directory

3. Deploy the contents of the `dist` directory to your hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Support

For support, please contact the development team or raise an issue in the repository.