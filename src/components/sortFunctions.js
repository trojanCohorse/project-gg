///////////////// CAN DELETE


export const sortTimestamps = (input) => {
  const modifyTime = (timestamp) => {
    const inputMinutes = timestamp.match(/^\d+/)[0];
    const inputSeconds = timestamp.match(/\d+$/)[0];
    return Number(inputMinutes) * 60 + Number(inputSeconds);
  }

  return input.sort((a, b) => {
    const sortedTimeA = modifyTime(a.timestamp);
    const sortedTimeB = modifyTime(b.timestamp);

    return sortedTimeA - sortedTimeB;
  })
}

// new references display
// export const sortSeasons = () => {

// }