from PIL import Image
import sys

def make_transparent(input_path, output_path, tolerance=240):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            # item is (R, G, B, A)
            if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
                # Replace near-white with transparent
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print("Success!")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    make_transparent("src/assets/isolated_shoe.png", "src/assets/transparent_shoe.png")
