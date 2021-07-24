export default function({ $featureToggle }) {
  $featureToggle.isQueryStringAllowed(props => {
    // For specific allow feature toggle key
    return true
  })
}
