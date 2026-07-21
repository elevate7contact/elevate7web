from PIL import Image
import os

pub = os.path.join(os.path.dirname(__file__), "..", "public")

# 1) Robot mascot (transparent PNG) -> hero-mascot.png
mascot = Image.open(os.path.join(pub, "Gemini_Generated_Image_3lztkj3lztkj3lzt.png"))
print("mascot original:", mascot.size, mascot.mode)
target_w = 900
ratio = target_w / mascot.width
mascot_resized = mascot.resize((target_w, int(mascot.height * ratio)), Image.LANCZOS)
mascot_resized.save(os.path.join(pub, "hero-mascot.webp"), quality=88, method=6)
print("mascot saved:", mascot_resized.size)

# 2) Desk/monitors photo -> team-workspace.jpg
desk = Image.open(os.path.join(pub, "Imagen 1.jpeg")).convert("RGB")
print("desk original:", desk.size, desk.mode)
target_w = 1400
ratio = target_w / desk.width
desk_resized = desk.resize((target_w, int(desk.height * ratio)), Image.LANCZOS)
desk_resized.save(os.path.join(pub, "team-workspace.jpg"), quality=82, optimize=True)
print("desk saved:", desk_resized.size)

# 3) Juan's real photo -> juan-founder.jpg
juan = Image.open(os.path.join(pub, "image-1784607257755.png")).convert("RGB")
print("juan original:", juan.size, juan.mode)
target_w = 900
ratio = target_w / juan.width
juan_resized = juan.resize((target_w, int(juan.height * ratio)), Image.LANCZOS)
juan_resized.save(os.path.join(pub, "juan-founder.jpg"), quality=88, optimize=True)
print("juan saved:", juan_resized.size)

# remove originals now that clean copies exist
os.remove(os.path.join(pub, "Gemini_Generated_Image_3lztkj3lztkj3lzt.png"))
os.remove(os.path.join(pub, "Imagen 1.jpeg"))
os.remove(os.path.join(pub, "image-1784607257755.png"))

print("done")
