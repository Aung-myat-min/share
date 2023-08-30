from pytube import YouTube

url = input("Enter the url: ")
src = YouTube(url)
avaliable_resolution = []

for reso in src.streams:
    if reso.resolution:
        print(reso.resolution)

desired_reso = input("Which resoluiton do you desire?\n: ")

video = src.streams.filter(res=desired_reso).first()

save_path = "C:/Users/koaun/Downloads"

video.download(output_path=save_path)

print('Video downloaded!')