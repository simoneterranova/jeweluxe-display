# Deployment Guide for Oreficeria Ravalli Website

## Prerequisites

- Domain name (oreficeriaravalli.it)
- A hosting platform account (Vercel, Netlify, or similar)
- Node.js installed locally for building

## Build Process

1. Install dependencies:
```bash
npm install
```

2. Create production build:
```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment Steps

### Option 1: Vercel (Recommended)

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
```bash
npm i -g vercel
```

3. Deploy using Vercel:
```bash
vercel
```

4. Configure custom domain:
   - Go to your Vercel project settings
   - Navigate to "Domains"
   - Add "oreficeriaravalli.it"
   - Follow DNS configuration instructions

### Option 2: Netlify

1. Create a Netlify account at https://netlify.com
2. Deploy using Netlify CLI or drag-and-drop the `dist` folder
3. Configure custom domain in Netlify settings

## DNS Configuration

1. Access your domain registrar's DNS settings
2. Add the following records:
   - Type: A
   - Name: @
   - Value: (Provided by hosting platform)
   - TTL: 3600

## SSL Certificate

- Both Vercel and Netlify provide automatic SSL certificates
- Certificates will be automatically renewed

## Environment Variables

Ensure all necessary environment variables are configured in your hosting platform:

1. Go to project settings
2. Find environment variables section
3. Add variables from your local `.env` file

## Post-Deployment

1. Verify the site is accessible at https://oreficeriaravalli.it
2. Check SSL certificate is working
3. Test all functionality in production environment
4. Set up monitoring and analytics

## Maintenance

- Regular updates: `npm update`
- Monitor performance and errors
- Keep dependencies updated
- Regular backups of configuration

## Support

For hosting-specific issues:
- Vercel: https://vercel.com/support
- Netlify: https://netlify.com/support

## Notes

- Keep this document updated with any changes to deployment process
- Document any custom configurations or requirements
- Maintain backup of all configuration settings