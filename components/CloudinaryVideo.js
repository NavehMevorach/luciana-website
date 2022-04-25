import { useRef } from 'react'
import { Video, CloudinaryContext, Transformation } from 'cloudinary-react'

const VideoPlayer = () => {
  const videoRef = useRef()
  return (
    <CloudinaryContext cloud_name="joinshelf">
      <div className="h-screen w-screen">
        <Video publicId="luciana_e1vp7u" innerRef={videoRef}>
          <Transformation
            audioCodec="none"
            height="480"
            quality="auto"
            videoCodec="auto"
            width="852"
            crop="fill"
          />
        </Video>
      </div>
    </CloudinaryContext>
  )
}
export default VideoPlayer
