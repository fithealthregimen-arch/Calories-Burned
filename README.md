# Calories Burned Calculator

A modern, responsive web application built with Next.js and TypeScript that calculates calories burned during various physical activities. The calculator uses scientifically proven MET (Metabolic Equivalent) values to provide accurate calorie burn estimates.

## ✨ Features

- **100+ Activities**: Comprehensive database of physical activities from daily tasks to intense sports
- **Science-Based Calculations**: Uses official MET values from exercise physiology research
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive UI**: Modern, intuitive interface with smooth animations
- **Real-time Results**: Instant calculations with detailed breakdowns
- **Progress Tracking**: Weekly fitness goal monitoring
- **Educational Content**: Beginner-friendly explanations and tips

## 🚀 Tech Stack

- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/calories-burned-calculator.git
   cd calories-burned-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── ActivitySelector.tsx
│   ├── UserInputs.tsx
│   └── ResultsDisplay.tsx
├── data/               # Activity database and constants
│   └── activities.ts
├── lib/                # Utility functions and calculations
│   ├── calculations.ts
│   └── utils.ts
├── pages/              # Next.js pages
│   ├── index.tsx
│   ├── how-it-works.tsx
│   ├── _app.tsx
│   └── _document.tsx
├── styles/             # Global styles
│   └── globals.css
└── types/              # TypeScript type definitions
    └── index.ts
```

## 🧮 How It Works

The calculator uses the standard formula for calorie calculation:

```
Calories = (METs × 3.5 × Weight in kg × Duration in minutes) / 200
```

Where:
- **METs**: Metabolic Equivalent values from scientific research
- **Weight**: User's body weight (converted to kg if needed)
- **Duration**: Activity duration in minutes

## 🎯 Key Components

### ActivitySelector
- Searchable database of 100+ activities
- Category filtering
- Intensity level indicators
- MET value display

### UserInputs
- Weight input with kg/lbs conversion
- Duration input with quick preset buttons
- Custom MET value option
- Form validation

### ResultsDisplay
- Total calories burned
- Calories per minute
- MET-minutes calculation
- Intensity classification
- Weekly goal progress
- Detailed activity breakdown

## 🚀 Deployment on Vercel

This project is optimized for Vercel deployment:

1. **Connect your repository to Vercel**
2. **Configure build settings** (auto-detected)
3. **Deploy with one click**

The application is optimized for server-side rendering and Vercel deployment.

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized typography scaling

## 🎨 Design Features

- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Proper contrast ratios and keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO**: Optimized metadata and semantic HTML structure

## 🔧 Customization

### Adding New Activities
Edit `src/data/activities.ts` to add new activities:

```typescript
{
  id: 'new-activity',
  name: 'Activity Name',
  category: 'Category',
  met: 5.0,
  description: 'Activity description'
}
```

### Modifying Calculations
Update calculation logic in `src/lib/calculations.ts`:

```typescript
export function calculateCalories(inputs: UserInputs): CalculationResults {
  // Your custom calculation logic
}
```

### Styling Changes
Modify `tailwind.config.js` for theme customization:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

## 📊 Features Overview

| Feature | Description |
|---------|-------------|
| Activity Database | 100+ activities with official MET values |
| Real-time Calculation | Instant results as you type |
| Unit Conversion | Automatic kg/lbs conversion |
| Progress Tracking | Weekly fitness goal monitoring |
| Responsive Design | Works on all device sizes |
| Educational Content | Beginner-friendly explanations |
| SEO Optimized | Search engine friendly |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- MET values based on the Compendium of Physical Activities
- Exercise physiology research from peer-reviewed journals
- Design inspiration from modern fitness applications

## 📞 Support

For support, please open an issue on GitHub or contact [your-email@example.com].

---

**Built with ❤️ using Next.js and TypeScript**
