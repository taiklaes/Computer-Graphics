// Função - Vizualizar coordenadas do canvas
function mouseDown(event) {
    let position = `X: ${event.screenX} | Y: ${event.screenY}`;
    console.log(position);
}

// Função - Criar shaders
function createShader(webgl, type, source) {
    var shader = webgl.createShader(type);
    webgl.shaderSource(shader, source);
    webgl.compileShader(shader);
    var success = webgl.getShaderParameter(shader, webgl.COMPILE_STATUS);
    if (success) {
        return shader;
    }

    console.log(webgl.getShaderInfoLog(shader));
    webgl.deleteShader(shader);
}

// Função - Criar programa
function createProgram(webgl, vertexShader, fragmentShader) {
    var program = webgl.createProgram();
    webgl.attachShader(program, vertexShader);
    webgl.attachShader(program, fragmentShader);
    webgl.linkProgram(program);
    var success = webgl.getProgramParameter(program, webgl.LINK_STATUS);
    if (success) {
        return program;
    }

    console.log(webgl.getProgramInfoLog(program));
    webgl.deleteProgram(program);
}

// Desenhar - Circulo
function setCircleVertices(webgl, tips, radius, x = 0.0, y = 0.0) {
    let vertexData = [];
    for (let index = 0; index < tips; index++) {
        vertexData.push(x, y);
        
        vertexData.push(x + radius * Math.cos(index * (2 * Math.PI) / tips), y + radius * Math.sin(index * (2 * Math.PI) / tips));
        vertexData.push(x + radius * Math.cos((index + 1) * (2 * Math.PI) / tips), y + radius * Math.sin((index + 1) * (2 * Math.PI) / tips));
    }

    webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(vertexData), webgl.STATIC_DRAW);
}

function setCircleColor(webgl, tips, color) {
    colorData = [];
    for (let triangle = 0; triangle < tips; triangle++) {
        for (let vertex = 0; vertex < 3; vertex++)
            colorData.push(...color);
    }
    webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(colorData), webgl.STATIC_DRAW);
}

// Desenhar - Retângulo
function setRectangleVertices(webgl, x, y, width, height) {
    var x1 = x;
    var x2 = x + width;
    var y1 = y;
    var y2 = y + height;
    webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([
        x1, y1,
        x2, y1,
        x1, y2,
        x1, y2,
        x2, y1,
        x2, y2,
    ]), webgl.STATIC_DRAW);
}

function setRectangleColor(webgl, color) {
    colorData = [];
    for (let triangle = 0; triangle < 2; triangle++) {
        for (let vertex = 0; vertex < 3; vertex++)
            colorData.push(...color);
    }
    webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(colorData), webgl.STATIC_DRAW);
}

// Desenhar - Triângulo
function setTriangleVertices(webgl, x1, y1, x2, y2, x3, y3) {
    webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array([
        x1, y1,
        x2, y2,
        x3, y3
    ]), webgl.STATIC_DRAW);
}

function setTriangleColor(webgl, color) {
    let colorData = [];
    for (let vertex = 0; vertex < 3; vertex++) {
        colorData.push(...color);
    }
    webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(colorData), webgl.STATIC_DRAW);
}
