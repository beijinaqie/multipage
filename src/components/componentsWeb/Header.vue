<template>
    <div id="header">
        <div class="layout">
            <Row id="row-header" type="flex" align="middle" justify="space-between">
                <div class="logo">
                    <a href="/"><img src="@/assets/img/webimg/nav_logo.png"></a>
                </div>
                <div class="header-menu">
                    <Menu mode="horizontal" active-name="1">
                        <div class="menu1 menList" v-if="menuOpen">
                            <MenuItem name="1">{{$t('head.home')}}</MenuItem>
                            <MenuItem name="2">竞拍</MenuItem>
                            <MenuItem name="3">发展</MenuItem>
                            <MenuItem name="4">钱包</MenuItem>
                            <MenuItem name="4">新闻</MenuItem>
                        </div>
                        <div class="menu2 menList" @click="menuOpen  =! menuOpen ">
                            <MenuItem name="4">白皮书</MenuItem>
                            <MenuItem name="headerLang">
                              <Dropdown @on-click="changeLang" class="language">
                                  <a href="javascript:void(0)">
                                      {{ lang }}
                                      <Icon type="ios-arrow-down"></Icon>
                                  </a>
                                  <DropdownMenu slot="list">
                                      <DropdownItem v-for="(item, index) in langListCopy" :name="item.label" :key="index">{{ item.label }}</DropdownItem>
                                  </DropdownMenu>
                              </Dropdown>
                            </MenuItem> 
                            <div class="head_icon">
                              <i  :class="menuOpen?'iconfont iconnav_caidanzhankai':'iconfont iconnav_caidan'"></i>
                            </div>
                        </div>                   
                    </Menu>
                </div>
            </Row>
        </div>
    </div>
</template>

<script>
export default {
  name: 'vheader',
  data() {
    return {
      menuOpen: false, //头部menu
      lang: localStorage.getItem('LANGUAGE')
        ? localStorage.getItem('LANGUAGE')
        : '中文',
      langList: [
        {
          label: '中文',
          value: 'zh'
        },
        {
          label: 'English',
          value: 'en'
        }
      ]
    }
  },
  computed: {
    language() {
      return this.$store.state.language
    },
    member() {
      return JSON.parse(localStorage.getItem('MEMBER'))
    },
    langListCopy() {
      return this.$options
        .data()
        .langList.filter(item => item.label !== this.language)
    }
  },
  methods: {
    changeLang(item) {
      this.lang = item
      this.$store.mutation.changeLanguage(item)
      this.$i18n.locale = item === 'English' ? 'en' : 'zh'
    }
  }
}
</script>
<style lang="scss">
@import '~@/assets/css/home/home.scss';
</style>