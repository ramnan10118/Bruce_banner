type BannerProps = {
  // Main text content
  mainText: string      // e.g. "Ride secure and save more!"
  
  // Subtitle/description text
  subtitle: {
    prefix: string        // e.g. "Get up to"
    emphasis: string      // e.g. "85%"
    suffix: string        // e.g. "off on bike insurance on ACKO!"
  }

  // Colors
  backgroundColor: string  // e.g. "#663399" (purple)
  primaryColor: string    // e.g. "#FFD700" (gold/yellow for text)
  highlightTextColor: string // e.g. "#FFFFFF" (white text)

  // CTA (Call to Action) button
  ctaButton: {
    text: string         // e.g. "Check now"
    backgroundColor: string // e.g. "#228B22" (green)
    textColor: string    // e.g. "#FFFFFF"
    href: string         // e.g. "#"
  }

  // Images
  logo?: {              // Optional logo (ACKO logo in top-right)
    src: string
    alt: string
  }
  productImage?: {      // Optional product image (bike in this case)
    src: string
    alt: string
  }

  // Optional footer text
  footerText?: string   // The disclaimer/policy text at bottom

  // Layout
  width?: number        // Banner width in pixels
  height?: number       // Banner height in pixels

  // Image controls
  imageControls?: {
    width: number
    height: number
    bottom: number
    right: number
    scale: number
    translateX: number
    translateY: number
    scaleX?: number
  }
} 

export default function Banner({
  mainText,
  subtitle,
  backgroundColor,
  primaryColor,
  highlightTextColor,
  ctaButton,
  logo,
  productImage,
  footerText,
  width = 1080,
  height = 1920,
  imageControls,
}: BannerProps) {
  // Function to adjust color brightness
  const adjustBrightness = (color: string, amount: number) => {
    const hex = color.replace('#', '');
    const r = Math.min(255, Math.max(0, parseInt(hex.slice(0, 2), 16) + amount));
    const g = Math.min(255, Math.max(0, parseInt(hex.slice(2, 4), 16) + amount));
    const b = Math.min(255, Math.max(0, parseInt(hex.slice(4, 6), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  // Generate gradient colors
  const color1 = backgroundColor;
  const color2 = adjustBrightness(backgroundColor, -30);
  const color3 = adjustBrightness(backgroundColor, -40);

  return (
    <div 
      className="relative overflow-hidden rounded-lg"
      style={{ 
        width,
        height,
        background: `linear-gradient(127deg, ${color1} 0%, ${color2} 66%, ${color3} 94%)`,
        fontFamily: 'EuclidCircularB'
      }}
    >
      {/* Logo */}
      {logo && (
        <div className="absolute" style={{ top: 25, right: 27 }}>
          <img src={logo.src} alt={logo.alt} style={{ width: 170, height: 56 }} />
        </div>
      )}

      {/* Main Content */}
      <div className="relative" style={{ padding: '163px 66px' }}>
        {/* Text Content */}
        <div>
          {/* Main Title */}
          <h1 
            className="leading-tight" 
            style={{ 
              fontSize: '112px',
              lineHeight: '1.2',
              fontWeight: 600,
              color: primaryColor
            }}
          >
            {mainText}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-white"
            style={{ 
              fontSize: '50px',
              marginTop: '75px',
              maxWidth: '614px',
              lineHeight: '1.2',
              fontWeight: 400
            }}
          >
            {subtitle.prefix}{' '}
            <span className="font-bold">{subtitle.emphasis}</span>{' '}
            {subtitle.suffix}
          </p>
        </div>

        {/* CTA Button */}
        <div 
          className="relative"
          style={{ 
            marginTop: '112px',
            width: 'fit-content',
            height: 'fit-content',
            position: 'relative',
            zIndex: 5
          }}
        >
          <button
            className="flex items-center justify-center text-white font-semibold relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${adjustBrightness(ctaButton.backgroundColor, 20)} 0%, ${ctaButton.backgroundColor} 100%)`,
              fontSize: '45px',
              borderRadius: '38px',
              fontFamily: 'EuclidCircularB',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              padding: '9px 30px',
              boxShadow: `
                inset 0px 2px 4px rgba(255, 255, 255, 0.25),
                inset 0px -2px 4px rgba(0, 0, 0, 0.15),
                0px 3px 7px rgba(0, 0, 0, 0.2)
              `,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer'
            }}
          >
            {/* Overlay gradient for 3D effect */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
                borderTopLeftRadius: '51px',
                borderTopRightRadius: '51px'
              }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>{ctaButton.text}</span>
          </button>
        </div>

        {/* Product Image */}
        {productImage && (
          <div 
            className="absolute overflow-hidden"
            style={{ 
              bottom: `${imageControls?.bottom || -242}px`,
              right: `${imageControls?.right || -110}px`,
              width: `${imageControls?.width || 560}px`,
              height: `${imageControls?.height || 560}px`,
              transform: `scale(${imageControls?.scale || 1.4})`,
              transformOrigin: 'bottom right'
            }}
          >
            <img 
              src={productImage.src} 
              alt={productImage.alt}
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0px 7px 15px rgba(0, 0, 0, 0.25))',
                transform: `translateX(${imageControls?.translateX || 150}px) translateY(${imageControls?.translateY || 75}px) scaleX(${imageControls?.scaleX || 1})`,
              }}
            />
          </div>
        )}
      </div>

      {/* Disclaimer Text */}
      {footerText && (
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            padding: '15px',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            zIndex: 10
          }}
        >
          <p 
            style={{ 
              fontSize: '17px',
              lineHeight: '1.4',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              maxWidth: '90%',
              margin: '0 auto'
            }}
          >
            {footerText}
          </p>
        </div>
      )}
    </div>
  );
} 