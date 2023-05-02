function box(leng, width, heigth, content) {
    if (leng <= 0 || width <= 0 || heigth <= 0 || content <= 0) {
        return null;
    }
    const volumeCm = leng * width * heigth;
    const volumeIn = volumeCm * 0.393701 ** 3;
    return volumeIn >= content;
}