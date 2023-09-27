

const formatURL = (item: string) => {
    return item.replace(/\s+/g, '%')
}

const formatName = (item: string) => {
    item.slice(1)
    return item.slice(1).replaceAll('%', ' ')
}

const formatTime = (seconds: number) => {
    let minutes = (Math.floor(seconds / 60))
    let leftoverSeconds = (seconds % 60)
    if(leftoverSeconds < 10) {
        return `${minutes}:0${leftoverSeconds}`
    } else {
        return `${minutes}:${leftoverSeconds}`
    }
    
}

export {formatURL, formatName, formatTime}

