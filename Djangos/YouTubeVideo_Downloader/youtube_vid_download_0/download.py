from pytube import YouTube


def download(url):
    src = YouTube(url)

    # for reso in src.streams:
    #     if reso.resolution:
    #         print(reso.resolution)
    #
    # desired_reso = input("Which resoluiton do you desire?\n: ")
    #
    # video = src.streams.filter(res=desired_reso).first()
    video = src.streams.get_highest_resolution()
    save_path = "C:/Users/koaun/Downloads"

    video.download(output_path=save_path)
