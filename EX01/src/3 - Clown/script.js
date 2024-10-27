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
    webgl.clearColor(0.0, 0.0, 0.0, 1.0);
    webgl.clear(webgl.COLOR_BUFFER_BIT);

    draw(webgl, positionBuffer, colorBuffer);
}



// Função - Desenho
let points = 30;
function draw(webgl, positionBuffer, colorBuffer){
    // Cores
    let dark_red = [0.6, 0.0, 0.0];
    let black = [0.0, 0.0, 0.0];
    let white = [1.0, 1.0, 1.0];
    let red = [1.0, 0.0, 0.0];
    let blue = [0.2, 0.4, 0.7];
    let green = [0.2, 0.5, 0.4];
    let orange = [1.0, 0.6, 0.0];
    let yellow = [1.0, 1.0, 0.0];

    // Cabelo (atrás esquerda)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, -0.5, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, -0.45, -0.1);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, -0.3, 0.0);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Cabelo (atrás direita)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.5, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.45, -0.1);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.3, 0.0);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Rosto
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.5, 0.0, -0.4);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, white);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Boca (externo)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.35, 0.0, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, dark_red);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Dentes
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.3, 0.0, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, white);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Boca (interno)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.0, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, dark_red);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Boca (interno)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.15, 0.0, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, white);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Correção boca
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.4, -0.55, 0.8, 0.4);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, white);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Cabelo (frente esquerda)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, -0.55, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, -0.5, -0.2);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, -0.43, -0.1);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, -0.3, 0.0);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, -0.14, 0.05);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, 0.0, 0.05);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Cabelo (frente direita)
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, 0.55, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, 0.5, -0.2);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, 0.43, -0.1);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, 0.3, 0.0);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, 0.14, 0.05);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, orange);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Canto esqeurdo da boca
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.35, -0.55, 0.2, 0.04);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, dark_red);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Canto direito da boca
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, 0.15, -0.55, 0.2, 0.04);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, dark_red);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Tinta do olho esquerdo
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.15, -0.25, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, blue);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Olho esquerdo
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.08, -0.25, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, white);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Pupila do olho esquerdo
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.05, -0.25, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, black);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Tinta do olho direito
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.15, 0.25, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Olho direito
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.08, 0.25, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, white);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Pupila do olho direito
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.05, 0.25, -0.3);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, black);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Nariz
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.15, 0.0, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, red);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Chápeu
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setTriangleVertices(webgl, -0.4, 0.0, 0.4, 0.0, 0, 0.8);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setTriangleColor(webgl, blue);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3);

    // Nariz
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.15, 0.0, 0.7);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, dark_red);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);
}
