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

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="flex items-center justify-center gap-8">
        <div className="relative">
          <h2 className="absolute -top-16 left-1/2 -translate-x-1/2 text-4xl font-bold p-4 bg-purple-100 rounded-lg shadow-sm z-10">Purple Banner</h2>
          <div style={{ transform: 'scale(0.75)' }}>
            <Banner {...purpleBanner} />
          </div>
        </div>
        <div className="relative">
          <h2 className="absolute -top-16 left-1/2 -translate-x-1/2 text-4xl font-bold p-4 bg-blue-100 rounded-lg shadow-sm z-10">Blue Banner</h2>
          <div style={{ transform: 'scale(0.75)' }}>
            <Banner {...blueBanner} />
          </div>
        </div>
        <div className="relative">
          <h2 className="absolute -top-16 left-1/2 -translate-x-1/2 text-4xl font-bold p-4 bg-teal-100 rounded-lg shadow-sm z-10">Teal Banner</h2>
          <div style={{ transform: 'scale(0.75)' }}>
            <Banner {...tealBanner} />
          </div>
        </div>
      </div>
    </div>
  )
} 