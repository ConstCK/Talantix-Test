<template>
    <div>{{ currentTime }}</div>
    <select v-model="city" @change="cityChange">
        <option v-for="city in citiesList" :key="city">{{ city }}</option>
    </select>
    <select v-model="department" @change="departmentChange">
        <option v-for="department in departmentList" :key="department">{{ department }}</option>
    </select>
    <select v-model="employee">
        <option v-for="employee in staffList" :key="employee">{{ employee }}</option>
    </select>
    <div>Бригада: {{ getBrigade }}</div>
    <button @click="postData">Отправить</button>
</template>

<script>
import { establishmentList } from "@/constants/data.js"
import { sendData } from "@/API/services.js"
export default {
    data() {
        return {
            allData: establishmentList,
            citiesList: [],
            departmentList: [],
            staffList: [],
            selectedCity: "",
            city: "",
            department: "",
            employee: "",
            brigade: null,
            time: new Date()
        }
    },
    methods: {
        cityChange(event) {
            let dataPool = null;
            this.selectedCity = event.target.value
            this.departmentList = []
            this.staffList = []

            dataPool = this.allData.filter((el) => {
                return el.city == event.target.value
            })
            dataPool.forEach((el) => {
                let deps = el.department
                deps.forEach((el) => {
                    this.departmentList.push(el.name)
                    this.staffList.push(...el.staff)
                })
            })
        },
        departmentChange(event) {
            this.staffList = [];
            let dataPool = null;

            if (this.selectedCity.length > 0) {
                dataPool = this.allData.filter((el) => {
                    return el.city == this.selectedCity
                })
            } else {
                dataPool = this.allData
            }

            dataPool.forEach((el) => {
                let deps = el.department
                deps.forEach((el) => {
                    if (el.name == event.target.value) {
                        this.staffList.push(...el.staff)
                    }
                })
            })
        },
        postData() {
            this.$cookies.set("city", this.city)
            this.$cookies.set("department", this.department)
            this.$cookies.set("employee", this.employee)
            this.$cookies.set("brigade", this.getBrigade)
            sendData(this.dataForSQL)
        }
    },
    computed: {
        getBrigade() {
            let currentHour = this.time.getHours()
            if (currentHour >= 20 || currentHour < 8) {
                this.brigade = 2
            } else {
                this.brigade = 1
            }
            return this.brigade
        },
        currentTime() {
            return this.time.toLocaleTimeString()
        },
        dataForSQL() {
            return [this.city, this.department, this.employee, this.getBrigade]
        }
    },
    mounted() {
        this.dataPool = establishmentList
        this.dataPool.forEach((el) => {
            this.citiesList.push(el.city)
            let deps = [...el.department]
            deps.forEach((el) => {
                this.departmentList.push(el.name)
                this.staffList.push(...el.staff)
            })
        })
    },
}
</script>

<style scoped></style>