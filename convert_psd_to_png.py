# from psd_tools import PSDImage

# 打开PSD文件
# psd = PSDImage.open('Letter#1.psd')

# 遍历所有图层，找到智能图层
# for layer in psd:
#     if layer.kind == 'smartobject':
#         # 假设智能图层的名称是 "Weixin Image_20240116205550"
#         if layer.name == "Weixin Image_20240116205550":
#             # 替换智能图层中的图片
#             # 你需要准备一个新的图片文件，这里假设它的路径是 '00019-1250358227.png'
#             new_image_path = '00019-1250358227.png'
#             with open(new_image_path, 'rb') as f:
#                 new_image_data = f.read()

#             # 设置智能图层的内容
#             layer.smart_object.data = new_image_data

#             # 导出整个PSD文件为PNG
#             merged_image = psd.compose()
#             merged_image.save('final_output.png')
#             break  # 如果只需要替换一个图层，找到后就可以退出循环

# layer = psd.tree().find(lambda node: node.name == 'Weixin Image_20240116205550')
# print(layer)

# 注意：这个脚本假设你已经知道智能图层的名称，并且新图片的路径是正确的。
# 如果智能图层的名称或路径不正确，脚本将不会按预期工作。

from psd_tools import PSDImage
from PIL import Image

def replace_image_in_psd(psd_path, replacement_image_path, output_path):
    # Load the PSD file
    psd = PSDImage.open(psd_path)

    # Find the 'Cloth' smart object layer
    cloth_layer = None
    for layer in psd:
        if layer.name == 'BRAND HERE' and layer.kind == 'smartobject':
            cloth_layer = layer
            break

    if not cloth_layer:
        raise Exception("Cloth smart object not found")

    # Replace 'Weixin Image_20240116205550' within 'Cloth' layer
    # for layer in cloth_layer:
    #     if layer.name == '图层 1':
    #         # Open the replacement image
    #         replacement_image = Image.open(replacement_image_path)
    #         # Replace the layer with the new image
    #         layer.topil().paste(replacement_image)
    #         break
    # replacement_image = Image.open(replacement_image_path)
    # cloth_layer.mask.topil().paste(replacement_image)

    # cloth_layer.smart_object.data = open(replacement_image_path, 'rb').read()

    # 外部的资源地址
    if cloth_layer.smart_object.kind == 'external':
        # 读取replacement_image_path图片文件写入 cloth_layer.smart_object.filename指向的文件
        with open(cloth_layer.smart_object.filename, 'wb') as f:
            f.write(open(replacement_image_path, 'rb').read())
            f.close()
   

    # Save the modified PSD as a PNG file
    psd.composite().save(output_path)

# Example usage
replace_image_in_psd('tshirt_back-恢复的.psd', '00019-1250358227.png', 'merged_image.png')
