<template>
  <div>
    <template>
      <el-tabs v-model="activeName" type="card">
        {{menusIds}}
        <el-tab-pane
          v-for="item in tableData "
          :key="item.id"
          :label="item.name"
          :name="item.id"
        >
          <el-checkbox
            v-model="menusIds"
            style="font-weight:600;margin-bottom:15px"
            :label="item.id"
            @change="handleCheck(item.id)"
          >全选</el-checkbox>

          <div v-for="(items, indexkey) in item.children" :key="items.id" class="checkbox-table">
            <template>
              <el-checkbox
                v-model="menusIds"
                class="check1"
                style="font-weight:600;margin-bottom: 15px"
                :label="items.id"
                @change="handleCheck(1,indexkey)"
              >{{ items.name }}</el-checkbox>
              <div style="margin-bottom: 20px;">
                <div
                  v-for="itemss in items.children"
                  :key="itemss.id"
                  class="line-check"
                  style="display: inline-block; margin-left: 20px;margin-bottom: 20px;"
                >
                  <el-checkbox
                    v-model="menusIds"
                    class="check2"
                    :label="itemss.id"
                    @change="handleCheck(2,indexkey)"
                  >{{ itemss.name }}</el-checkbox>
                </div>
              </div>
            </template>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: '', // 所有的菜单数组，
      activeName: '4',
      menusIds: [], // 已选的菜单id数组
      currentTabIndex: 1,
      firstId: null
    }
  },
  created: function() {
    this.getid()
  },
  methods: {
    // 获取权限所有角色
    getid() {
      let res = {
        'result': [
          {
            'id': '4',
            'name': '22121',
            'children': [
              {
                'id': '5',
                'name': '菜单管理',
                'children': [
                  {
                    'id': '6',
                    'name': '添加菜单'
                  },
                  {
                    'id': '17',
                    'name': '修改菜单'
                  },
                  {
                    'id': '44',
                    'name': '新增菜单'
                  }
                ]
              }
            ]
          },
        ],
        'info': '数据查询成功！',
        'code': 100000
      }
      this.tableData = res.result
    },

    handleCheck(type, a) {
      // debugger
      // console.log(this.menusIds)
      this.menu = this.tableData[0].children
      console.log('this.menu: ', this.menu);

      if (a === undefined) {
        if (this.menusIds[this.menusIds.length - 1] === type) {
          this.menu.forEach((item, index) => { // 如果要存的menusIds里的id没有，需要循环获取全部id并且把id存进要传的menusIds数组里
            if (this.menusIds.indexOf(item.id) < 0) {
              this.menusIds.push(item.id)
            }
            this.handleCheck(1, index) // 递归一下点击二级菜单的时候
          })
        } else {
          // 只取消当前tab下的菜单
          this.menu.forEach((item, index) => {
            if (this.menusIds.indexOf(item.id) > -1) {
              this.menusIds.splice(this.menusIds.indexOf(item.id), 1)
            }
            this.handleCheck(1, index) // 递归一下点击二级菜单的时候
          })
        }
      }

      if (type === 1) { // 二级菜单点击
        if (Array.isArray(this.menu[a].children)) { // 在使用前判断是否是数组,如果是数组就执行里面的逻辑,Array.isArray() 用于确定传递的值是否是一个 Array。
          if (this.menusIds.indexOf(this.menu[a].id) > -1) {
            this.menu[a].children.map(item => {
              if (this.menusIds.findIndex((n) => n === item.id) < 0) {
                this.menusIds.push(item.id)
              }
            })
          } else {
            this.menu[a].children.map(item => {
              if (this.menusIds.findIndex((n) => n === item.id) > -1) {
                this.menusIds.splice(this.menusIds.findIndex((n) => n === item.id), 1)
              }
            })
          }
        }
      }

      if (type === 2) { // 三级菜单点击
        let index = 0
        this.menu[a].children.map(item => {
          if (this.menusIds.indexOf(item.id) > -1) {
            index += 1
          }
        })
        if (index > 0) {
          if (this.menusIds.indexOf(this.menu[a].id) < 0) {
            this.menusIds.push(this.menu[a].id)
          }
        } else {
          if (this.menusIds.indexOf(this.menu[a].id) > -1) {
            this.menusIds.splice(this.menusIds.indexOf(this.menu[a].id), 1)
          }
        }
      }
    }

  }
}
</script>

<style lang="less" scoped>
.el-checkbox + .el-checkbox {
  margin-left: 0px;
}
.el-checkbox {
  margin-right: 25px;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #c79f5e !important;
  border-color: #c79f5e !important;
}
.el-checkbox__inner:hover {
  border-color: #c79f5e !important;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #c79f5e !important;
}
.el-checkbox + .el-checkbox {
  margin-left: 0px;
}
.el-checkbox {
  margin-right: 25px;
}
.second {
  width: 92%;
  margin: 0 auto;
  height: 46px;
  background: #f1f6f9;
  box-sizing: border-box;
  line-height: 46px;
  padding: 0 20px;
  font-size: 16px;
}
.Levelthree {
  width: 92%;
  line-height: 40px;
  margin: 0 auto;
}
</style>
