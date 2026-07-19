from PIL import Image, ImageDraw, ImageFont
import os

out_dir = os.path.join(os.path.dirname(__file__), "..", "public")
os.makedirs(out_dir, exist_ok=True)

INK = (5, 7, 13)
NEON = (17, 255, 131)   # sampled from the real Elevate 7 IA logo
WHITE = (245, 247, 245)

def get_font(size, bold=True):
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()

# --- og-image.jpg (1200x630), built from the real logo crop ---
ow, oh = 1200, 630
og = Image.new("RGB", (ow, oh), INK)
d2 = ImageDraw.Draw(og)

for i in range(0, oh, 2):
    t = i / oh
    r = int(INK[0] + (NEON[0] - INK[0]) * t * 0.08)
    g = int(INK[1] + (NEON[1] - INK[1]) * t * 0.10)
    b = int(INK[2] + (NEON[2] - INK[2]) * t * 0.08)
    d2.line([(0, i), (ow, i)], fill=(r, g, b))

logo = Image.open(os.path.join(out_dir, "logo.png")).convert("RGB")
logo_size = 380
logo_resized = logo.resize((logo_size, logo_size), Image.LANCZOS)
og.paste(logo_resized, (60, (oh - logo_size) // 2))

title_font = get_font(58)
sub_font = get_font(30, bold=False)
tag_font = get_font(26, bold=False)

text_x = 500
d2.text((text_x, 200), "Elevate 7 IA", font=title_font, fill=WHITE)
d2.text((text_x, 270), "AI Automation Agency for Business Growth", font=sub_font, fill=(220, 230, 222))
d2.text((text_x, 315), "Bogota, Colombia — Remote-first, worldwide clients", font=tag_font, fill=NEON)

og.save(os.path.join(out_dir, "og-image.jpg"), quality=92)

print("og-image generated from real logo")
