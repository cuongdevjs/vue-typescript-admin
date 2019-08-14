<template functional>
  <el-dialog
    :visible.sync="props.openDialog"
    lock-scroll
    :width="props.widthDialog"
    :close-on-click-modal="
      props.closeOnClickModal == null ? false : props.closeOnClickModal
    "
    :close-on-press-escape="
      props.closeOnPressEscape == null ? false : props.closeOnPressEscape
    "
    :show-close="false"
    :modal-append-to-body="
      props.modalAppendToBody == null ? false : props.modalAppendToBody
    "
    :append-to-body="props.appendToBody"
    :custom-class="props.classDialog"
    :top="props.offsetTop"
    :center="props.center"
    @closed="listeners['closed']"
  >
    <div slot="title">
      <img
        class="close-dialog clickable"
        src="@/assets/img/new-symbol/close.svg"
        alt=""
        @click="listeners['closeDialog']"
      />
      <slot name="header"></slot>
    </div>
    <div class="dialog-body">
      <slot name="body"></slot>
    </div>
    <div slot="footer" class="dialog-footer">
      <slot name="footer"></slot>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "create-dialog",
  props: [
    "openDialog",
    "widthDialog",
    "classDialog",
    "offsetTop",
    "appendToBody",
    "center",
    "modalAppendToBody",
    "closeOnClickModal",
    "closeOnPressEscape"
  ]
};
</script>

<style scoped></style>
