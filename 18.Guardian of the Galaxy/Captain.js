class Captain {
    constructor(width, height) {
        this.a = 150;
        this.b = 465;
        this.width = width;
        this.height = height;
        // this.color = "brown";
    }
    init(canvas) {
        canvas.addEventListener('mousemove', function (event) {
            processMouseMove(event);
        })

        function processMouseMove(event) {
            // let rect = canvas.getBoundingClientRect();
            captain.a = event.clientX - 50;
        }
    }

    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.drawImage(captainImg, this.a, this.b, this.width, this.height)
    }

}