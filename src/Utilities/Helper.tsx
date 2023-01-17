

const formatURL = (item: string) => {
    return item.replace(/\s+/g, '%')
}

const formatName = (item: string) => {
    item.slice(1)
    return item.slice(1).replaceAll('%', ' ')
}

export {formatURL, formatName}