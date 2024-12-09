'use client'

import Banner from '../components/Banner'

export default function BannerGenerator() {
  const purpleBanner = {
    mainText: 'Your safety\nis our\npriority!',
    subtitle: {
      prefix: 'Get',
      emphasis: '85%',
      suffix: 'off on ACKO two-wheeler insurance'
    },
    backgroundColor: '#9E57BD',
    primaryColor: '#FFD700',
    highlightTextColor: '#FFFFFF',
    ctaButton: {
      text: 'Insure Now',
      backgroundColor: '#35823F',
      textColor: '#FFFFFF',
      href: '#'
    },
    logo: {
      src: '/logo.svg',
      alt: 'ACKO Logo'
    },
    productImage: {
      src: '/images/bike.png',
      alt: 'Red Motorcycle'
    },
    footerText: 'Acko General Insurance Limited | IRDAI Reg no. 157 | UID: 5394 | Two Wheeler Package Policy IRDAN157RP0002V01201819 for more details visit www.acko.com | *T&Cs Apply',
    width: 810,
    height: 1440
  }

  // Google Ads - Medium Rectangle (300x250)
  const purpleBannerMediumRectangle = {
    ...purpleBanner,
    mainText: 'Save Big\non Insurance!',
    subtitle: {
      prefix: 'Get',
      emphasis: '85%',
      suffix: 'off today'
    },
    footerText: 'T&Cs Apply. IRDAI Reg no. 157',
    width: 300,
    height: 250,
    // Custom styles for medium rectangle
    customStyles: {
      mainText: {
        fontSize: '32px',
        lineHeight: '1.1',
        marginTop: '35px'
      },
      subtitle: {
        fontSize: '20px',
        lineHeight: '1.2',
        marginTop: '10px'
      },
      logo: {
        width: '80px',
        height: '26px',
        top: '12px',
        right: '12px'
      },
      cta: {
        fontSize: '18px',
        padding: '6px 16px',
        marginTop: '12px'
      },
      footer: {
        fontSize: '8px',
        padding: '4px',
        bottom: '0'
      }
    },
    imageControls: {
      width: 120,
      height: 120,
      bottom: -20,
      right: -20,
      scale: 1.1,
      translateX: 15,
      translateY: 10
    }
  }

  /* Blue Banner Configuration */
  const blueBanner = {
    ...purpleBanner,
    backgroundColor: '#4169E1', // Royal Blue
    mainText: 'Smart rides\nstart with\nACKO!',
    subtitle: {
      prefix: 'Get',
      emphasis: '85%',
      suffix: 'instant savings on your ACKO plan'
    },
    productImage: {
      src: '/images/scooter.png',
      alt: 'Scooter'
    },
    ctaButton: {
      text: 'Start Now',
      backgroundColor: '#FF7A00', // Vibrant Orange
      textColor: '#FFFFFF',
      href: '#'
    },
    imageControls: {
      width: 400,
      height: 600,
      bottom: -282,
      right: -100,
      scale: 1.4,
      translateX: 50,
      translateY: 75
    }
  }

  /* Teal Banner Configuration */
  const tealBanner = {
    ...purpleBanner,
    backgroundColor: '#2A4858', // Dark Teal
    mainText: 'Your health\ndeserves the\nbest care!',
    subtitle: {
      prefix: 'Save',
      emphasis: '85%',
      suffix: 'on health insurance with zero-wait'
    },
    productImage: {
      src: '/images/Health_man1.png',
      alt: 'Health Insurance Man'
    },
    ctaButton: {
      text: 'Cover Now',
      backgroundColor: '#00B4D8', // Bright Teal
      textColor: '#FFFFFF',
      href: '#'
    },
    imageControls: {
      width: 500,
      height: 700,
      bottom: -242,
      right: -110,
      scale: 1.2,
      translateX: 60,
      translateY: 75,
      scaleX: -1
    }
  }

  // Google Ads - Leaderboard (728x90)
  const purpleBannerLeaderboard = {
    ...purpleBanner,
    mainText: 'Save Big on Insurance!',
    subtitle: {
      prefix: 'Get',
      emphasis: '85%',
      suffix: 'off today'
    },
    footerText: 'T&Cs Apply. IRDAI Reg no. 157',
    width: 728,
    height: 90,
    customStyles: {
      mainText: {
        fontSize: '24px',
        lineHeight: '1.1',
        marginTop: '8px',
        maxWidth: '350px',
        textAlign: 'left'
      },
      subtitle: {
        fontSize: '14px',
        lineHeight: '1.2',
        marginTop: '6px',
        maxWidth: '350px',
        textAlign: 'left'
      },
      logo: {
        width: '50px',
        height: '16px',
        top: '10px',
        right: '15px'
      },
      cta: {
        fontSize: '14px',
        padding: '3px 12px',
        position: 'absolute',
        right: '120px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'auto'
      },
      footer: {
        fontSize: '7px',
        padding: '2px',
        bottom: '2px'
      },
      container: {
        position: 'relative',
        paddingLeft: '20px'
      }
    },
    imageControls: {
      width: 70,
      height: 70,
      bottom: -10,
      right: 40,
      scale: 0.9,
      translateX: 0,
      translateY: 5
    }
  }

  // Google Ads - Mobile Leaderboard (320x50)
  const purpleBannerMobileLeaderboard = {
    ...purpleBanner,
    mainText: 'Save 85% Today!',
    subtitle: {
      prefix: '',
      emphasis: '',
      suffix: ''  // No subtitle due to space
    },
    footerText: 'T&Cs Apply',
    width: 320,
    height: 50,
    customStyles: {
      mainText: {
        fontSize: '18px',
        lineHeight: '1',
        marginTop: '8px'
      },
      logo: {
        width: '40px',
        height: '13px',
        top: '5px',
        right: '5px'
      },
      cta: {
        fontSize: '12px',
        padding: '2px 8px',
        marginTop: '2px'
      },
      footer: {
        fontSize: '6px',
        padding: '1px',
        bottom: '0'
      }
    },
    imageControls: {
      width: 40,
      height: 40,
      bottom: -5,
      right: 45,
      scale: 1,
      translateX: 0,
      translateY: 0
    }
  }

  // Google Ads - Half Page (300x600)
  const purpleBannerHalfPage = {
    ...purpleBanner,
    mainText: 'Save Big\non Two-Wheeler\nInsurance!',
    subtitle: {
      prefix: 'Get up to',
      emphasis: '85%',
      suffix: 'off on your premium today'
    },
    footerText: 'T&Cs Apply. IRDAI Reg no. 157',
    width: 300,
    height: 600,
    customStyles: {
      mainText: {
        fontSize: '36px',
        lineHeight: '1.1',
        marginTop: '50px'
      },
      subtitle: {
        fontSize: '22px',
        lineHeight: '1.2',
        marginTop: '20px'
      },
      logo: {
        width: '90px',
        height: '30px',
        top: '15px',
        right: '15px'
      },
      cta: {
        fontSize: '24px',
        padding: '8px 20px',
        marginTop: '30px'
      },
      footer: {
        fontSize: '9px',
        padding: '5px',
        bottom: '0'
      }
    },
    imageControls: {
      width: 220,
      height: 220,
      bottom: -30,
      right: -30,
      scale: 1.2,
      translateX: 20,
      translateY: 10
    }
  }

  // Google Ads - Large Rectangle (336x280)
  const purpleBannerLargeRectangle = {
    ...purpleBanner,
    mainText: 'Save Big\non Insurance!',
    subtitle: {
      prefix: 'Get',
      emphasis: '85%',
      suffix: 'off on your premium'
    },
    footerText: 'T&Cs Apply. IRDAI Reg no. 157',
    width: 336,
    height: 280,
    customStyles: {
      mainText: {
        fontSize: '36px',
        lineHeight: '1.1',
        marginTop: '40px'
      },
      subtitle: {
        fontSize: '22px',
        lineHeight: '1.2',
        marginTop: '12px'
      },
      logo: {
        width: '85px',
        height: '28px',
        top: '15px',
        right: '15px'
      },
      cta: {
        fontSize: '20px',
        padding: '6px 18px',
        marginTop: '15px'
      },
      footer: {
        fontSize: '8px',
        padding: '4px',
        bottom: '0'
      }
    },
    imageControls: {
      width: 140,
      height: 140,
      bottom: -25,
      right: -25,
      scale: 1.1,
      translateX: 20,
      translateY: 10
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="flex flex-col items-center gap-16">
        {/* Original Purple Banner */}
        <div className="relative">
          <div style={{ transform: 'scale(0.75)' }}>
            <Banner {...purpleBanner} />
          </div>
        </div>

        {/* MedRec - 300x250 */}
        <div className="relative">
          <p className="text-white text-sm mb-2">MedRec - 300×250</p>
          <Banner {...purpleBannerMediumRectangle} />
        </div>

        {/* Leader - 728x90 */}
        <div className="relative">
          <p className="text-white text-sm mb-2">Leader - 728×90</p>
          <Banner {...purpleBannerLeaderboard} />
        </div>

        {/* MobileLeader - 320x50 */}
        <div className="relative">
          <p className="text-white text-sm mb-2">MobileLeader - 320×50</p>
          <Banner {...purpleBannerMobileLeaderboard} />
        </div>

        {/* HalfPage - 300x600 */}
        <div className="relative">
          <p className="text-white text-sm mb-2">HalfPage - 300×600</p>
          <Banner {...purpleBannerHalfPage} />
        </div>

        {/* LargeRec - 336x280 */}
        <div className="relative">
          <p className="text-white text-sm mb-2">LargeRec - 336×280</p>
          <Banner {...purpleBannerLargeRectangle} />
        </div>
      </div>
    </div>
  )
} 