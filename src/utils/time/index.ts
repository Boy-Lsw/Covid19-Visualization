const timeFormatter = (time: number) => { return time >= 10 ? `${time}` : `0${time}` }

const getDateClassify = (timestamp: number) => {
  const date = new Date(timestamp)
  return {
    year: timeFormatter(date.getFullYear()),
    month: timeFormatter(date.getMonth()),
    day: timeFormatter(date.getDate())
  }
}

const getDateText = (timeStamp: number) => {
  const t = getDateClassify(timeStamp)
  return `${t.year}年${t.month}月${t.day}日`
}

const timeUtils = { getDateClassify, getDateText }

export default timeUtils
