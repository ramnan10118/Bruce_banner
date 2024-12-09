'use client'

import Banner from '../components/Banner'

export default function BannerGenerator() {
  const purpleBanner = {
    primaryText: ['Ride', 'and', 'more!'],
    highlightedText: ['secure', 'save'],
    subtitle: {
      prefix: 'Get up to',
      emphasis: '85%',
      suffix: 'off on bike insurance on ACKO!'
    },
    backgroundColor: '#9E57BD',
    primaryColor: '#FFD700',
    highlightTextColor: '#FFFFFF',
    ctaButton: {
      text: 'Check now',
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
    productImage: {
      src: '/images/scooter.png',
      alt: 'Scooter'
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

  return (
    <div className="min-h-screen flex items-center justify-center gap-8 p-8">
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
    </div>
  )
} 