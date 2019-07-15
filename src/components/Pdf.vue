<template>
  <div>
     <pdf
      ref="pdf"
      :src="pdfUrl">
    </pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf';

export default {
  components: {
    pdf
  },
  data() {
    return {
      pdfUrl: 'http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf'
    }
  }
}
</script>
