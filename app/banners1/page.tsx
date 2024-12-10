'use client'

import Banner from '../components/Banner'
import { CSSProperties } from 'react'

export default function BannerGenerator1() {
  const carBanner = {
    mainText: 'All year car\nprotection',
    subtitle: {
      prefix: 'starting at',
      emphasis: '₹2,094',
      suffix: ''
    },
    backgroundColor: '#5D0E8B',
    primaryColor: '#FFFFFF',
    highlightTextColor: '#FFD700',
    ctaButton: {
      text: 'Download the app',
      backgroundColor: '#00A651',
      textColor: '#FFFFFF',
      href: '#'
    },
    logo: {
      src: '/logo.svg',
      alt: 'ACKO Logo'
    },
    footerText: 'Acko General Insurance Limited| IRDAI Reg no. 157 | UID: 5597 | Liability Only Policy Private Car | IRDAN157RP0001V01201718\nFor more details visit www.acko.com | *T&Cs Apply Private Car Liability Policy not exceeding 1000 cc.',
    width: 810,
    height: 1440,
    customStyles: {
      container: {
        padding: '40px',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative'
      } as CSSProperties,
      logo: {
        width: '200px',
        height: 'auto',
        position: 'absolute',
        top: '40px',
        right: '40px'
      } as CSSProperties,
      mainText: {
        fontSize: '100px',
        lineHeight: '1.1',
        fontWeight: 600,
        textAlign: 'center',
        maxWidth: '700px',
        marginTop: '240px'
      } as CSSProperties,
      subtitle: {
        container: {
          marginTop: '90px',
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          gap: '20px'
        } as CSSProperties,
        text: {
          fontSize: '64px',
          lineHeight: '1.4',
          color: '#FFFFFF'
        } as CSSProperties,
        emphasis: {
          fontSize: '96px',
          fontWeight: 600,
          color: '#FFD700'
        } as CSSProperties
      },
      ctaButton: {
        container: {
          marginTop: '160px',
          position: 'relative',
          zIndex: 2
        } as CSSProperties,
        button: {
          fontSize: '42px',
          padding: '20px 40px',
          borderRadius: '50px'
        } as CSSProperties
      },
      appDownload: {
        container: {
          marginTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 2
        } as CSSProperties,
        text: {
          fontSize: '24px',
          color: '#FFFFFF',
          marginRight: '20px'
        } as CSSProperties,
        icons: {
          display: 'flex',
          gap: '15px'
        } as CSSProperties,
        icon: {
          height: '60px',
          width: 'auto'
        } as CSSProperties
      },
      footer: {
        fontSize: '12px',
        lineHeight: '1.4',
        position: 'absolute',
        bottom: '20px',
        left: '40px',
        right: '20px',
        opacity: 0.8,
        textAlign: 'center'
      } as CSSProperties
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div style={{ transform: 'scale(1)' }}>
        <Banner {...carBanner}>
          <div style={carBanner.customStyles.appDownload.container}>
            <img 
              src="/appdownload.svg" 
              alt="Download our app"
              style={{ height: '80px' }}
            />
          </div>
        </Banner>
      </div>
    </div>
  )
} 