type BannerProps = {
  // Main text content split into parts for different styling
  primaryText: string[]    // e.g. ["Ride", "and", "more!"]
  highlightedText: string[] // e.g. ["secure", "save"]
  
  // Subtitle/description text
  subtitle: {
    prefix: string        // e.g. "Get up to"
    emphasis: string      // e.g. "85%"
    suffix: string        // e.g. "off on bike insurance on ACKO!"
  }

  // Colors
  backgroundColor: string  // e.g. "#663399" (purple)
  primaryColor: string    // e.g. "#FFD700" (gold/yellow for "Ride and more!")
  highlightTextColor: string // e.g. "#FFFFFF" (white text on green)

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
} 

export default function Banner({
  primaryText,
  highlightedText,
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
}: BannerProps) {
  return (
    <div 
      className="relative overflow-hidden rounded-lg"
      style={{ 
        width,
        height,
        background: `linear-gradient(127deg, rgba(158,87,189,1) 0%, rgba(94,47,127,1) 66%, rgba(85,41,120,1) 94%)`,
        fontFamily: 'EuclidCircularB'
      }}
    >
      {/* Logo */}
      {logo && (
        <div className="absolute" style={{ top: 33, right: 36 }}>
          <img src={logo.src} alt={logo.alt} style={{ width: 227, height: 75 }} />
        </div>
      )}

      {/* Main Content */}
      <div className="relative" style={{ padding: '217px 88px' }}>
        {/* Text Content */}
        <div>
          {/* Main Title */}
          <h1 className="leading-tight" 
            style={{ 
              fontSize: '150px', 
              lineHeight: '1.2',
              fontWeight: 600
            }}
          >
            {primaryText.map((text, index) => (
              <span key={index} style={{ color: primaryColor }}>
                {text}{' '}
              </span>
            )).reduce((prev, curr, i) => {
              if (i < highlightedText.length) {
                return [...prev, curr, 
                  <span 
                    key={`highlight-${i}`} 
                    style={{ 
                      color: highlightTextColor,
                      display: 'inline',
                      marginRight: '24px',
                      fontWeight: 600
                    }}
                  >
                    {highlightedText[i]}{' '}
                  </span>
                ];
              }
              return [...prev, curr];
            }, [] as React.ReactNode[])}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-white"
            style={{ 
              fontSize: '66px',
              marginTop: '100px',
              maxWidth: '819px',
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
            marginTop: '150px',
            width: 'fit-content',
            height: 'fit-content',
            position: 'relative',
            zIndex: 5
          }}
        >
          <button
            className="flex items-center justify-center text-white font-semibold relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #3E9649 0%, #35823F 100%)',
              fontSize: '60px',
              borderRadius: '51px',
              fontFamily: 'EuclidCircularB',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              padding: '12px 40px 12px 40px',
              boxShadow: `
                inset 0px 3px 6px rgba(255, 255, 255, 0.25),
                inset 0px -3px 6px rgba(0, 0, 0, 0.15),
                0px 4px 9px rgba(0, 0, 0, 0.2)
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
              bottom: '-400px',
              right: '-150px',
              width: '800px',
              height: '800px',
              transform: 'scale(1.4)',
              transformOrigin: 'bottom right'
            }}
          >
            <img 
              src={productImage.src} 
              alt={productImage.alt}
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))',
                transform: 'translateX(200px) translateY(100px)',
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
            padding: '20px',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            zIndex: 10
          }}
        >
          <p 
            style={{ 
              fontSize: '22px',
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