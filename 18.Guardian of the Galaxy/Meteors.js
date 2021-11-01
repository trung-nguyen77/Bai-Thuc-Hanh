class Meteor {
    constructor() {
        this.x = 150;
        this.y = 0;
        this.speed = 1;
    }

    init() {
        // let positions = [78, 178, 278, 437];
        this.x = this.getRandomInt(); //lấy trong mảng position phần tử từ 0 đến 3

    }

    getRandomInt = function () {
        return Math.floor(Math.random() * 400) ;//tạo hàm lấy số ngẫu nhiên
    }


    update(captain) {
        if (this.y <= 450) {
            this.y += (2 + this.speed);
        }
        this.checkHitCaptain(captain);
    }

    checkHitCaptain(captain) {
        if (this.y + 70  >= 450) {
            if ((this.x + 50 > captain.a) &&
                (this.x + 50 < (captain.a + captain.width)) || (this.x  > captain.a) && (this.x  < (captain.a + captain.width)) ) {
                this.y = 0;
                score += 10;
                this.speed += 1;
                if (score > 100 && score % 5 === 0) {
                    this.speed += 2
                    this.render(canvas)

                }
                this.init();
            } else {
                this.y = 0;
                alert('game over');
                getName();
                getPoint();
                score = 0;
                this.speed = 0;
                drawGameOver();
                clearSky();
                // clearInterval(timerId);
            }
        }

    }

    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.drawImage(meteorImg, this.x, this.y, 50, 85);
    }
}
