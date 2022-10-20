function unix(dt, type) {
    const milliseconds = dt * 1000
    const data = new Date(milliseconds)
    let result = 
    type == 'weekday' ? data.toLocaleString("ru-RU", { weekday: "short" }) :
    type == 'month' ? data.toLocaleString("ru-RU", { month: "long" }) :
    type == 'day' ? data.toLocaleString("ru-RU", { day: "numeric" }) : 
    type == 'hour' ? data.toLocaleString("ru-RU", { hour: "numeric" }): 
    type == 'minutes' ? data.toLocaleString("ru-RU", { minute: "numeric" }): ''
    return result
    
}
  
export default unix