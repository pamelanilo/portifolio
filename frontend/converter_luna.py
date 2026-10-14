
from PIL import Image
from pathlib import Path

origem = Path("src/assets/luna-sprites.webp")
destino = Path("src/assets/luna-animada.gif")

imagem = Image.open(origem)
quadros = []

for i in range(imagem.n_frames):
    imagem.seek(i)
    quadro = imagem.convert("RGBA").copy()

    # Mantém a transparência da personagem
    fundo = Image.new("RGBA", quadro.size, (0, 0, 0, 0))
    fundo.alpha_composite(quadro)

    # Converte o quadro para o formato GIF
    paleta = fundo.convert("RGB").quantize(colors=255)
    mascara = fundo.getchannel("A").point(
        lambda pixel: 255 if pixel < 128 else 0
    )
    paleta.paste(255, mask=mascara)
    paleta.info["transparency"] = 255

    quadros.append(paleta)

quadros[0].save(
    destino,
    save_all=True,
    append_images=quadros[1:],
    duration=120,
    loop=2,
    transparency=255,
    disposal=2,
    optimize=False
)

print("GIF criado em:", destino)
