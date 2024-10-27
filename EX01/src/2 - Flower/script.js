// Função - Main
function main() {
    const canvas = document.querySelector("#canva");
    const webgl = canvas.getContext('webgl');

    if (!webgl) {
        throw new Error('WebGL not supported');
    }

    canvas.addEventListener("mousedown", mouseDown, false);

    // Shaders
    let fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;
    let vertexShaderSource = document.querySelector("#vertex-shader-2d").text;
    let fragmentShader = createShader(webgl, webgl.FRAGMENT_SHADER, fragmentShaderSource);
    let vertexShader = createShader(webgl, webgl.VERTEX_SHADER, vertexShaderSource);
    let program = createProgram(webgl, vertexShader, fragmentShader);
    webgl.useProgram(program);

    // Buffers
    const positionLocation = webgl.getAttribLocation(program, `position`);
    const colorLocation = webgl.getAttribLocation(program, `color`);
    const positionBuffer = webgl.createBuffer();
    const colorBuffer = webgl.createBuffer();

    webgl.enableVertexAttribArray(positionLocation);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    webgl.vertexAttribPointer(positionLocation, 2, webgl.FLOAT, false, 0, 0);

    webgl.enableVertexAttribArray(colorLocation);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    webgl.vertexAttribPointer(colorLocation, 3, webgl.FLOAT, false, 0, 0);

    // Limpar tela
    webgl.clearColor(1.0, 1.0, 1.0, 1.0);
    webgl.clear(webgl.COLOR_BUFFER_BIT);

    draw(webgl, positionBuffer, colorBuffer);
}



// Função - Desenho
let points = 30;
function draw(webgl, positionBuffer, colorBuffer){
    // Cores
    let yellow = [1.0, 0.9, 0.0];
    let pink = [1.0, 0.5, 0.6];
    let green = [0.0, 0.5, 0.0];

    // Caule
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.05, -1.0, 0.1, 1.0);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Flor - Pétalas (TOP-LEFT)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, -0.3, 0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, pink);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Flor - Pétalas (TOP)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.0, 0.6);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, pink);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Flor - Pétalas (TOP-RIGHT)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.3, 0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, pink);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Flor - Pétalas (RIGHT)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.4, 0.2);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, pink);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Flor - Pétalas (BOTTOM-RIGHT)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.3, -0.1);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, pink);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Flor - Pétalas (BOTTOM)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.0, -0.2);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, pink);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Flor - Pétalas (BOTTOM-LEFT)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, -0.3, -0.1);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, pink);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Flor - Pétalas (LEFT)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, -0.4, 0.2);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, pink);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Flor - Circulo interno
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.3, 0.0, 0.2);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, yellow);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);
}
