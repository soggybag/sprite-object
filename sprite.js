
class Sprite {
  constructor(x, y, r, w, h, c) {
    this.x = x
    this.y = y 
    this.rotation = r
    this.width = w
    this.height = h
    this.color = c
  }

  update(ctx) {
    // Save the current state of the context
    ctx.save()
    // ctx.globalCompositeOperation = 'destination-over';
    // Move the origin of the context to the location of rectangle
    ctx.translate(this.x, this.y)
    // Rotate the context
    ctx.rotate(this.rotation * Math.PI / 180)
    // Set the fill style
    ctx.fillStyle = this.color
    // Define a rectangle with a location offset at half it's width and height
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    // Restore the context to it's original state
    ctx.restore();
    return this // **** If the methods return 'this' they can be chained!
  }

  setColor(c) {
    this.color = c
    return this
  }
  // Size
  setSize(w, h) {
    this.width = w
    this.height = h
    return this
  }
  // Move
  move(x, y) {
    this.x = x
    this.y = y
    return this // *** If the methods return 'this' they can be chained!
  }

  // Rotate
  setRotation(r) {
    this.rotation = r
    return this
  }
}

class Circle extends Sprite {
  constructor(x, y, radius, c) {
    const w = radius * 2
    const h = w 

    super(x, y, 0, w, h, c)

    console.log(x, y)
    console.log(this.x, this.y)

    this.radius = radius
  }

  setSize(radius) {
    this.radius = radius
    this.width = radius * 2
    this.height = this.width
    return this
  }

  update(ctx) {
    ctx.save()
    ctx.beginPath()
    ctx.translate(this.x, this.y)
    // Can you rotate a circle? 
    // ctx.rotate(this.rotation * Math.PI / 180)
    ctx.fillStyle = this.color
    ctx.arc(0, 0, this.radius, 0, Circle.PI2);
    ctx.fill();
    ctx.restore();
    return this 
  }
}

Circle.PI2 = 2 * Math.PI