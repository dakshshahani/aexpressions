const expressionList = [
    {
      id: 1,
      title: "Wiggle Animation",
      description: "Add random movement to any property for organic motion effects.",
      icon: "🌊",
      category: "Animation",
      code: "wiggle(frequency, amplitude)",
      explanation: "The wiggle expression creates random movement by applying noise to a property. The frequency parameter controls how fast the wiggling occurs (times per second), while amplitude controls the maximum distance of the wiggle.",
      example: "wiggle(2, 50) // Wiggles 2 times per second with 50 pixel amplitude",
      useCase: "Perfect for creating handheld camera effects, organic text animations, or adding life to static elements."
    },
    {
      id: 2,
      title: "Bounce Expression",
      description: "Create realistic bouncing effects with decay for natural physics simulation.",
      icon: "⚡",
      category: "Physics",
      code: "// Bounce with decay\namp = .5;\nfreq = 2.0;\ndecay = 2.0;\n\nif (numKeys > 0){\n  t = time - key(1).time;\n  if (t >= 0){\n    v = velocityAtTime(key(1).time - .001);\n    amp * Math.sin(freq * t * 2 * Math.PI) / Math.exp(decay * t) + value;\n  } else {\n    value;\n  }\n} else {\n  value;\n}",
      explanation: "This expression simulates realistic bouncing physics with gradual decay. It calculates the bounce based on the initial velocity and applies exponential decay over time.",
      example: "Apply to position property after setting keyframes",
      useCase: "Great for bouncing balls, spring animations, elastic UI elements, or any object that should react with realistic physics."
    },
    {
      id: 3,
      title: "Time Remapping",
      description: "Control animation timing and create smooth loops with precise time control.",
      icon: "⏰",
      category: "Time",
      code: "loopOut(\"cycle\", 0)",
      explanation: "Loop expressions allow you to repeat animation cycles seamlessly. The 'cycle' type creates a continuous loop, while the second parameter defines how many keyframes to exclude from the loop.",
      example: "loopOut('pingpong') // Creates back-and-forth motion",
      useCase: "Essential for creating seamless background animations, rotating elements, or any repetitive motion that needs to loop smoothly."
    },
    {
      id: 4,
      title: "Scale Pulse",
      description: "Rhythmic scaling animation that pulses in sync with your composition.",
      icon: "💓",
      category: "Scale",
      code: "s = [100, 100];\namp = 20;\nfreq = 2;\n\ns + [amp * Math.sin(freq * time * Math.PI * 2), amp * Math.sin(freq * time * Math.PI * 2)]",
      explanation: "Creates a pulsing scale effect using sine waves. The amplitude controls how much the scale changes, while frequency determines the speed of the pulse.",
      example: "Adjust 'amp' for pulse intensity and 'freq' for pulse speed",
      useCase: "Perfect for heartbeat animations, breathing effects, music visualizations, or drawing attention to important elements."
    },
    {
      id: 5,
      title: "Smooth Follow",
      description: "Create lag and easing effects for smooth following animations.",
      icon: "🎯",
      category: "Animation",
      code: "delay = 5; // frames\nd = delay * thisComp.frameDuration * (index - 1);\nthisComp.layer(1).transform.position.valueAtTime(time - d)",
      explanation: "This expression creates a smooth following effect where layers follow each other with a time delay. Each layer follows the previous one, creating a chain-like motion.",
      example: "Apply to multiple layers with different index values",
      useCase: "Ideal for creating snake-like animations, trailing effects, text reveals, or any sequence where elements should follow each other smoothly."
    },
    {
      id: 6,
      title: "Random Color",
      description: "Generate dynamic color variations for vibrant, ever-changing visuals.",
      icon: "🎨",
      category: "Color",
      code: "seedRandom(index, true);\nr = random(0, 1);\ng = random(0, 1);\nb = random(0, 1);\n[r, g, b, 1]",
      explanation: "Generates random colors based on the layer index. The seedRandom function ensures consistent colors across renders while still providing variation between layers.",
      example: "Each layer gets a unique random color that stays consistent",
      useCase: "Great for colorful motion graphics, data visualizations, particle systems, or creating diverse color palettes automatically."
    }
  ];

  export default expressionList;