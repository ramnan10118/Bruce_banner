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
    href: string         // Link URL
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
              fontWeight: 600 // SemiBold
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
                      fontWeight: 600 // SemiBold
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
              fontWeight: 400 // Regular
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
            marginTop: '160px',
            width: '486px',
            height: '137px'
          }}
        >
          <a
            href={ctaButton.href}
            className="w-full h-full flex items-center justify-center text-white font-semibold"
            style={{
              background: '#35823F',
              fontSize: '80px',
              borderRadius: '68.5px',
              boxShadow: '0px 5px 6px rgba(12, 40, 68, 0.2)',
              fontFamily: 'EuclidCircularB',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              padding: '0 40px'
            }}
          >
            {ctaButton.text}
          </a>
        </div>

        {/* Product Image */}
        {productImage && (
          <div 
            className="absolute"
            style={{ 
              bottom: 0,
              right: 0,
              width: '1382px',
              height: '776px'
            }}
          >
            <img 
              src={productImage.src} 
              alt={productImage.alt}
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Footer Text */}
        {footerText && (
          <>
            <div 
              className="absolute w-full"
              style={{ 
                bottom: '92px',
                left: '48px',
                right: '48px',
                height: '2px',
                background: 'rgba(255, 255, 255, 0.3)'
              }}
            />
            <div 
              className="absolute"
              style={{ 
                bottom: '0',
                left: '-17px',
                right: 0,
                padding: '0 48px 0',
                textAlign: 'center'
              }}
            >
              <p 
                className="text-white/80"
                style={{ 
                  fontSize: '22px',
                  maxWidth: '1115px',
                  margin: '0 auto'
                }}
              >
                {footerText}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 