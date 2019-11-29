<template>
<div id="Contract">
    <h1>联系我们 <span class="shadowImg"></span> </h1>
    <div class="content">
        <div class="form">
            <Form :model="form">
              <FormItem>
                <Input v-model="form.email" placeholder="邮箱"></Input>
              </FormItem>
              <FormItem>
                <Input v-model="form.title" placeholder="标题"></Input>
              </FormItem>
              <FormItem>
                <Input v-model="form.content" type="textarea" :autosize="{minRows: 2,maxRows: 3}" placeholder="留言内容…"></Input>
              </FormItem>
              <FormItem>
                <Button class="Submit">提交</Button>
              </FormItem>
            </Form>
        </div>
    </div>
    <div class="contract_phone">
       <img src="@/assets/img/webimg/contract_phone.png" alt="">
    </div>
    <div class="contract_href">
      <a>开发者</a>
      <a>区块浏览器</a>
      <a>链上稳定币</a>
    </div>
</div>        
</template>

<script>
export default {
  name: 'Contract',
  data() {
    return {
      form: {
        email: '',
        title: '',
        content: ''
      }
    }
  },
  methods: {}
}
</script>
<style lang='scss' src='@/assets/css/common/common.scss'></style>
