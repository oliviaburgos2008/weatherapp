const WeatherStat = ({icon,value, unit}) => {
  return (
    <div className="flex gap-2">
    <img src={icon} alt="" />
    <span>{value} {unit}</span>
</div>
  )
}
export default WeatherStat