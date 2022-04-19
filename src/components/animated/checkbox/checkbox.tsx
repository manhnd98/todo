import Svg, { Path } from 'react-native-svg'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN

function AnimatedCheckbox() {
  return (
    <Svg
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}
    >
      <Path
        d="M352 16H64C37.4903 16 16 37.4903 16 64V352C16 378.51 37.4903 400 64 400H352C378.51 400 400 378.51 400 352V64C400 37.4903 378.51 16 352 16Z"
        stroke="black"
        stroke-width="32"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default AnimatedCheckbox
