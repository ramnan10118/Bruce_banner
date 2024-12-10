type BannerProps = {
  // Main text content
  mainText: string
  
  // Subtitle/description text
  subtitle: {
    prefix: string
    emphasis: string
    suffix: string
  }

  // Colors
  backgroundColor: string
  primaryColor: string
  highlightTextColor: string

  // CTA (Call to Action) button
  ctaButton: {
    text: string
    backgroundColor: string
    textColor: string
    href: string
  }

  // Images
  logo?: {
    src: string
    alt: string
  }
  productImage?: {
    src: string
    alt: string
  }

  // Optional footer text
  footerText?: string

  // Layout
  width?: number
  height?: number

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

<<<<<<< HEAD
  // Custom styles for overriding defaults
  customStyles?: {
    container?: React.CSSProperties
    logo?: React.CSSProperties
    mainText?: React.CSSProperties
    subtitle?: {
      container?: React.CSSProperties
      text?: React.CSSProperties
      emphasis?: React.CSSProperties
    }
    ctaButton?: {
      container?: React.CSSProperties
      button?: React.CSSProperties
    }
    footer?: React.CSSProperties
  }
}
=======
  // Custom styles
  customStyles?: {
    mainText?: {
      fontSize: string
      lineHeight: string
      marginTop: string
      maxWidth?: string
      textAlign?: string
    }
    subtitle?: {
      fontSize: string
      lineHeight: string
      marginTop: string
      maxWidth?: string
      textAlign?: string
    }
    logo?: {
      width: string
      height: string
      top: string
      right: string
    }
    cta?: {
      fontSize: string
      padding: string
      position?: Position
      right?: string
      top?: string
      width?: string
      transform?: string
    }
    footer?: {
      fontSize: string
      padding: string
      bottom: string
    }
    container?: {
      position: Position
      paddingLeft: string
    }
  }
} 
>>>>>>> 90c8f33b4bf9b27b13b4b5c8b2a7737e00415e15

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
<<<<<<< HEAD
  customStyles = {}
=======
  customStyles
>>>>>>> 90c8f33b4bf9b27b13b4b5c8b2a7737e00415e15
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
        fontFamily: 'EuclidCircularB',
        ...customStyles.container
      }}
    >
      {/* Logo */}
      {logo && (
<<<<<<< HEAD
        <div className="absolute" style={{ top: 25, right: 27, ...customStyles.logo }}>
          <img src={logo.src} alt={logo.alt} style={{ width: 170, height: 56, ...customStyles.logo }} />
=======
        <div 
          className="absolute" 
          style={{ 
            top: customStyles?.logo?.top || '25px',
            right: customStyles?.logo?.right || '27px'
          }}
        >
          <img 
            src={logo.src} 
            alt={logo.alt} 
            style={{ 
              width: customStyles?.logo?.width || '170px',
              height: customStyles?.logo?.height || '56px'
            }} 
          />
>>>>>>> 90c8f33b4bf9b27b13b4b5c8b2a7737e00415e15
        </div>
      )}

      {/* Main Content */}
<<<<<<< HEAD
      <div className="relative" style={{ padding: '163px 66px', ...customStyles.container }}>
=======
      <div 
        className="relative" 
        style={{ 
          padding: customStyles?.mainText?.marginTop ? '0 20px' : '163px 66px',
          position: customStyles?.container?.position || 'relative',
          paddingLeft: customStyles?.container?.paddingLeft || '20px'
        }}
      >
>>>>>>> 90c8f33b4bf9b27b13b4b5c8b2a7737e00415e15
        {/* Text Content */}
        <div>
          {/* Main Title */}
          <h1 
            className="leading-tight" 
            style={{ 
              fontSize: customStyles?.mainText?.fontSize || '112px',
              lineHeight: customStyles?.mainText?.lineHeight || '1.2',
              fontWeight: 600,
              color: primaryColor,
<<<<<<< HEAD
              ...customStyles.mainText
=======
              marginTop: customStyles?.mainText?.marginTop || '0',
              maxWidth: customStyles?.mainText?.maxWidth,
              textAlign: customStyles?.mainText?.textAlign || 'left'
>>>>>>> 90c8f33b4bf9b27b13b4b5c8b2a7737e00415e15
            }}
          >
            {mainText}
          </h1>

          {/* Subtitle */}
<<<<<<< HEAD
          <div style={customStyles.subtitle?.container}>
            <p 
              className="text-white"
              style={{ 
                fontSize: '50px',
                marginTop: '75px',
                maxWidth: '614px',
                lineHeight: '1.2',
                fontWeight: 400,
                ...customStyles.subtitle?.text
              }}
            >
              {subtitle.prefix}{' '}
              <span className="font-bold" style={customStyles.subtitle?.emphasis}>{subtitle.emphasis}</span>{' '}
              {subtitle.suffix}
            </p>
          </div>
=======
          <p 
            className="text-white"
            style={{ 
              fontSize: customStyles?.subtitle?.fontSize || '50px',
              marginTop: customStyles?.subtitle?.marginTop || '75px',
              maxWidth: customStyles?.subtitle?.maxWidth || '614px',
              lineHeight: customStyles?.subtitle?.lineHeight || '1.2',
              fontWeight: 400,
              textAlign: customStyles?.subtitle?.textAlign || 'left'
            }}
          >
            {subtitle.prefix}{' '}
            <span className="font-bold">{subtitle.emphasis}</span>{' '}
            {subtitle.suffix}
          </p>
>>>>>>> 90c8f33b4bf9b27b13b4b5c8b2a7737e00415e15
        </div>

        {/* CTA Button */}
        <div 
          style={{ 
<<<<<<< HEAD
            marginTop: '112px',
            width: 'fit-content',
            height: 'fit-content',
            position: 'relative',
            zIndex: 5,
            ...customStyles.ctaButton?.container
=======
            position: customStyles?.cta?.position || 'relative',
            right: customStyles?.cta?.right,
            top: customStyles?.cta?.top,
            width: customStyles?.cta?.width || 'fit-content',
            transform: customStyles?.cta?.transform,
            zIndex: 5
>>>>>>> 90c8f33b4bf9b27b13b4b5c8b2a7737e00415e15
          }}
        >
          <button
            className="flex items-center justify-center text-white font-semibold relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${adjustBrightness(ctaButton.backgroundColor, 20)} 0%, ${ctaButton.backgroundColor} 100%)`,
              fontSize: customStyles?.cta?.fontSize || '45px',
              borderRadius: '38px',
              fontFamily: 'EuclidCircularB',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              padding: customStyles?.cta?.padding || '9px 30px',
              boxShadow: `
                inset 0px 2px 4px rgba(255, 255, 255, 0.25),
                inset 0px -2px 4px rgba(0, 0, 0, 0.15),
                0px 3px 7px rgba(0, 0, 0, 0.2)
              `,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              ...customStyles.ctaButton?.button
            }}
          >
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
                transform: `translateX(${imageControls?.translateX || 150}px) translateY(${imageControls?.translateY || 75}px) scaleX(${imageControls?.scaleX || 1})`
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
            bottom: customStyles?.footer?.bottom || '0',
            left: 0,
            right: 0,
            width: '100%',
            padding: customStyles?.footer?.padding || '15px',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            zIndex: 10,
            ...customStyles.footer
          }}
        >
          <p 
            style={{ 
              fontSize: customStyles?.footer?.fontSize || '17px',
              lineHeight: '1.4',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              maxWidth: '90%',
              margin: '0 auto',
              ...customStyles.footer
            }}
          >
            {footerText}
          </p>
        </div>
      )}
    </div>
  );
} 