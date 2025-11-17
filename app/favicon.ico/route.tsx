import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        ♛
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  )
}