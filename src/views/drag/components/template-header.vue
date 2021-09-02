<template>
  <el-row :gutter="20" class="template-header">
    <el-col :lg="6" :xl="5" class="title">
      <span>模板设置</span>
    </el-col>
    <el-col :lg="12" :xl="14">
      <ul class="step-nav">
        <li>
          <span>填写基础信息</span>
        </li>
        <li class="active"><span>设置布局规划</span></li>
      </ul>
    </el-col>
    <el-col :lg="6" :xl="5" class="options text-right">
      <el-button size="small">上一步</el-button>
      <el-button size="small">保存</el-button>
      <el-button size="small" type="primary">发布</el-button>
      <el-button size="small">取消</el-button>
    </el-col>
  </el-row>
</template>
<style lang="sass" scoped>
.template-header
  .title
    height: 47px
    text-align: left
    span
      position: relative
      display: block
      line-height: 47px
      padding-left: 16px
      &::after
        position: absolute
        left: 0
        top: 50%
        content: ''
        width: 6px
        height: 15px
        border-radius: 2px
        background: #368FFF
        transform: translateY(-50%)
  .options
    height: 47px
    padding: 7px
  .step-nav
    height: 47px
    li
      position: relative
      display: inline-block
      line-height: 47px
      padding: 0 30px
      span
        position: relative
        display: block
        padding: 0 8px
        cursor: pointer
        color: #262626
        &::after
         position: absolute
         left: 0
         bottom: 0
         content: ''
         width: 100%
         height: 2px
         font-size: 0
      & + li
        &::after
          position: absolute
          left: -4px
          top: 45%
          content: ''
          width: 8px
          height: 8px
          border-right: 1px solid #ddd
          border-top: 1px solid #ddd
          transform: translateY(-50%)
          transform: rotate(45deg)
      &.active
        span
          color: #368FFF
          &::after
            background: #368FFF
      &:hover
        span
          color: #368FFF 
</style>