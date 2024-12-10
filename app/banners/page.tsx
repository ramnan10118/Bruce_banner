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

  // Medium Rectangle - Purple Theme (300x250)
  const mediumRectangleBanner = {
    mainText: 'Ride\nSafe!',
    subtitle: {
      prefix: 'Get',
      emphasis: '85%',
      suffix: 'off'
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
    footerText: 'T&Cs Apply',
    width: 300,
    height: 250,
    customStyles: {
      container: {
        padding: '15px'
      },
      logo: {
        width: '60px',
        height: 'auto',
        marginBottom: '5px'
      },
      mainText: {
        fontSize: '32px',
        lineHeight: '1',
        fontWeight: 600,
        marginTop: '0px',
        maxWidth: '200px'
      },
      subtitle: {
        container: {
          marginTop: '20px'
        },
        text: {
          fontSize: '14px',
          lineHeight: '1.2',
          marginTop: '0'
        },
        emphasis: {
          fontSize: '16px',
          fontWeight: 600
        }
      },
      ctaButton: {
        container: {
          marginTop: '28px'
        },
        button: {
          fontSize: '14px',
          padding: '8px 16px',
          borderRadius: '24px'
        }
      },
      footer: {
        fontSize: '8px',
        marginTop: '10px',
        padding: '4px',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        height: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    imageControls: {
      width: 260,
      height: 160,
      bottom: -40,
      right: -120,
      scale: 1,
      translateX: 2,
      translateY: 2
    }
  }

  // Medium Rectangle - Blue Theme (300x250)
  const blueRectangleBanner = {
    mainText: 'Smart\nRides!',
    subtitle: {
      prefix: 'Get',
      emphasis: '85%',
      suffix: 'off'
    },
    backgroundColor: '#4169E1',
    primaryColor: '#FFD700',
    highlightTextColor: '#FFFFFF',
    ctaButton: {
      text: 'Start Now',
      backgroundColor: '#FF7A00',
      textColor: '#FFFFFF',
      href: '#'
    },
    logo: {
      src: '/logo.svg',
      alt: 'ACKO Logo'
    },
    productImage: {
      src: '/images/scooter.png',
      alt: 'Scooter'
    },
    footerText: 'T&Cs Apply',
    width: 300,
    height: 250,
    customStyles: {
      container: {
        padding: '15px'
      },
      logo: {
        width: '60px',
        height: 'auto',
        marginBottom: '5px'
      },
      mainText: {
        fontSize: '32px',
        lineHeight: '1',
        fontWeight: 600,
        marginTop: '5px',
        maxWidth: '100px'
      },
      subtitle: {
        container: {
          marginTop: '15px'
        },
        text: {
          fontSize: '14px',
          lineHeight: '1.2',
          marginTop: '0'
        },
        emphasis: {
          fontSize: '16px',
          fontWeight: 600
        }
      },
      ctaButton: {
        container: {
          marginTop: '25px'
        },
        button: {
          fontSize: '14px',
          padding: '8px 16px',
          borderRadius: '24px'
        }
      },
      footer: {
        fontSize: '8px',
        marginTop: '10px',
        padding: '4px',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        height: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    imageControls: {
      width: 260,
      height: 160,
      bottom: -20,
      right: -100,
      scale: 1,
      translateX: 2,
      translateY: 2
    }
  }

  const tealRectangleBanner = {
    mainText: 'Smart\nRides!',
    subtitle: {
      prefix: 'Get',
      emphasis: '85%',
      suffix: 'off'
    },
    backgroundColor: '#2A4858',  // Dark Teal from teal banner
    primaryColor: '#FFD700',
    highlightTextColor: '#FFFFFF',
    ctaButton: {
      text: 'Start Now',
      backgroundColor: '#00B4D8',  // Bright Teal from teal banner
      textColor: '#FFFFFF',
      href: '#'
    },
    logo: {
      src: '/logo.svg',
      alt: 'ACKO Logo'
    },
    productImage: {
      src: '/images/Health_man1.png',
      alt: 'Health Insurance Man'
    },
    footerText: 'T&Cs Apply',
    width: 300,
    height: 250,
    customStyles: {
      container: {
        padding: '15px'
      },
      logo: {
        width: '60px',
        height: 'auto',
        marginBottom: '5px'
      },
      mainText: {
        fontSize: '32px',
        lineHeight: '1',
        fontWeight: 600,
        marginTop: '5px',
        maxWidth: '100px'
      },
      subtitle: {
        container: {
          marginTop: '5px'
        },
        text: {
          fontSize: '14px',
          lineHeight: '1.2'
        },
        emphasis: {
          fontSize: '16px',
          fontWeight: 600
        }
      },
      ctaButton: {
        container: {
          marginTop: '15px'
        },
        button: {
          fontSize: '14px',
          padding: '8px 16px',
          borderRadius: '6px'
        }
      },
      footer: {
        fontSize: '8px',
        marginTop: '10px',
        padding: '4px',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        height: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
    imageControls: {
      width: 160,
      height: 160,
      bottom: -40,
      right: -30,
      scale: 1,
      translateX: 0,
      translateY: 0,
      scaleX: -1  // Flipped like in teal banner
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="flex flex-col gap-20">
        <div className="flex items-start gap-8">
          {/* Purple Banner Column with Medium Rectangle */}
          <div className="flex flex-col gap-20">
            <div>
              <div style={{ transform: 'scale(0.75)' }}>
                <Banner {...purpleBanner} />
              </div>
            </div>
            
            <div>
              <Banner {...mediumRectangleBanner} />
            </div>
          </div>

          {/* Blue Banner Column with Medium Rectangle */}
          <div className="flex flex-col gap-20">
            <div>
              <div style={{ transform: 'scale(0.75)' }}>
                <Banner {...blueBanner} />
              </div>
            </div>

            <div>
              <Banner {...blueRectangleBanner} />
            </div>
          </div>

          {/* Teal Banner Column with Medium Rectangle */}
          <div className="flex flex-col gap-20">
            <div>
              <div style={{ transform: 'scale(0.75)' }}>
                <Banner {...tealBanner} />
              </div>
            </div>

            <div>
              <Banner {...tealRectangleBanner} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 