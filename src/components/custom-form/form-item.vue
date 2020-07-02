<template>
  <div :class="['custom-form-item', {'inline': inline}, `${attrData.size || ''}`, {'error': errorMessage && currentType === prop}]">
    <label :label="label" class="label" :style="`width: ${attrData.labelWidth}; text-align:${attrData.labelPosition}`" v-text="label"></label>
    <div :class="['custom-input-item']">
      <slot class="xx"></slot>
      <p v-if="errorMessage" v-text="errorMessage" class="error-message"></p>
    </div>
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  name: 'form-item',
  inject: ['attrData'],
  props: {
    label: String,
    inline: {
      type: Boolean,
      default: () => false
    },
    prop: String
  },
  data() {
    return {
      errorMessage: '',
      currentType: ''
    }
  },
  created() {
    console.log(this.attrData)
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
      
    })
  },
  methods: {
    validate() {
      // 获取到校验规则
      const rules = this.attrData.rules[this.prop]
      // 获取到表单内容
      const forms = this.attrData.model[this.prop]
      // 获取到当前校验的某一项的校验规则
      const params = {
        [this.prop]: rules
      }
      // 获取到当前表单的内容，根据内容去校验
      const value = { [this.prop]: forms }
      // 创建校验实列
      const schema = new Schema(params)
      // 校验方法
      schema.validate(value, err => {
        // 一旦有错误，就将错误信息抛出
        if (err) {
          let str = ''
          err.forEach(error => {
            // debugger
            str += error.message
            this.currentType = error.field
          });
          this.errorMessage = str
        } else {
          this.errorMessage = ''
          // 验正通过
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-form-item {
  display: flex;
  width: 100%;
  box-sizing: content-box;
  .label {
    flex: none;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
    font-size: 14px;
  }
  .custom-input-item {
    position: relative;
    flex: 1;
    padding-bottom: 22px;
    input {
      width: 100%;
      background: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      height: 40px;
      line-height: inherit;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
      vertical-align: top;
    }
  }
  &.mini {
    .label,
    .custom-input-item,
    .custom-input-item input {
      height: 28px;
      line-height: 28px;
    }
  }
  &.small {
    .label,
    .custom-input-item input {
      height: 32px;
      line-height: 32px;
    }
  }
  &.medium {
    .label,
    .custom-input-item input {
      height: 36px;
      line-height: 36px;
    }
  }
  &.error {
    .custom-input-item input {
      border-color: #f56c6c;
    }
  }
}
.error-message {
  position: absolute;
  left: 0;
  bottom: 5px;
  margin: 0;
  line-height: 15px;
  color: red;
  font-size: 14px;
  text-align: left;
}
</style>