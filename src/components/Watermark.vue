<template>
  <div class="wrap">
    <div class="optea">
      <div class="file-upload">
        <p>选择图片</p>
        <el-button type="text" style="color: #c00;"
          ><label for="uploads">
            <i class="el-icon-upload2" style="margin-right: 5px;"></i>
            选择需要添加水印的图片</label
          ></el-button
        >
        <input
          type="file"
          id="uploads"
          hidden
          accept="image/png, image/jpeg, image/gif, image/jpg"
          @change="uploadImg($event, 1)"
        />
      </div>
      <p>水印文字</p>
      <el-input
        v-model="watermarkOptions.text"
        placeholder="请输入水印内容"
      ></el-input>
      <p>字体颜色</p>
      <el-color-picker v-model="watermarkOptions.color"></el-color-picker>
      <p>旋转角度</p>
      <el-slider
        v-model="watermarkOptions.rotate"
        :min="0"
        :max="360"
      ></el-slider>
      <p>透明度</p>
      <el-slider
        v-model="watermarkOptions.alpha"
        :min="0"
        :max="100"
      ></el-slider>
      <p>文本间距</p>
      <el-slider
        v-model="watermarkOptions.width"
        :min="0"
        :max="100"
      ></el-slider>
      <p>字体大小</p>
      <el-slider
        v-model="watermarkOptions.fontSize"
        :min="0"
        :step="0.5"
        :max="50"
      ></el-slider>
    </div>
    <div>
      <el-button
        @click="handleDown"
        class="download-btn"
        type="primary"
        plain
        icon="el-icon-download"
        >下载水印图片</el-button
      >
      <div class="preview" ref="previewImg">
        <img :src="preImg || defaultimg" alt="" />
        <div class="watermark" :style="{ background: paint }"></div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import defaultimg from "./../assets/dog.jpg";
import DomToImage from "dom-to-image";
export default {
  data() {
    return {
      defaultimg,
      preImg: "",
      watermarkOptions: {
        text: "仅供 xxx 验证使用",
        fontSize: 10,
        width: 5,
        color: "#000000",
        alpha: 35,
        rotate: 35
      }
    };
  },
  methods: {
    uploadImg(e, num) {
      //上传图片
      // this.option.img
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          this.preImg = data;
        }
      };
      // 转化为base64
      reader.readAsDataURL(file);
      // 转化为blob
      // reader.readAsArrayBuffer(file)
    },
    handleDown() {
      let node = this.$refs.previewImg;
      let that = this;
      DomToImage.toPng(node)
        .then(function(dataUrl) {
          var oLink = document.createElement("a");
          oLink.download = "水印图片.png";
          oLink.href = dataUrl;
          oLink.click();
          that.$nextTick(() => {
            that.$message.success("水印图片下载成功");
          });
        })
        .catch(function(error) {
          console.error("oops, something went wrong!", error);
          that.$message.error("下载失败");
        });
    }
  },
  computed: {
    paint() {
      // 文字长度
      const wordWidth =
        this.watermarkOptions.fontSize *
        this.watermarkOptions.text.split("").length;
      const width = wordWidth + this.watermarkOptions.width;

      let svgText = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${width}px">
    <text x="50%" y="50%"
        alignment-baseline="middle"
        text-anchor="middle"
        stroke="${this.watermarkOptions.color}"
        opacity="${this.watermarkOptions.alpha / 100}"
        transform="translate(${width / 2}, ${width / 2}) rotate(${
        this.watermarkOptions.rotate
      }) translate(-${width / 2}, -${width / 2})"
        font-weight="100"
        font-size="${this.watermarkOptions.fontSize}"
        font-family="microsoft yahe"
        >
        ${this.watermarkOptions.text}
    </text>
   </svg>`;

      return `url(data:image/svg+xml;base64,${btoa(
        unescape(encodeURIComponent(svgText))
      )})`;
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    margin: 5px 0;
    margin-bottom: 10px;
    font-weight: 600;
  }
  .download-btn {
    margin: 0 15px 15px;
  }
  .optea {
    width: 500px;
  }
  .preview {
    position: relative;
    margin-left: 20px;
    min-width: 750px;
    img {
      width: 100%;
      height: 100%;
    }
    .watermark {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
