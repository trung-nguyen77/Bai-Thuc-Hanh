function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let countApple = 0;
    let countOrange = 0;
    for (let i = 0; i < apples.length; i++) {
        if (apples[i] + a >= s && apples[i] + a <= t) {
            countApple++
        }
    }

}