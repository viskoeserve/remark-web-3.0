
<template>

    <div class="flex items-center justify-center w-full border">
      <div class="w-full px-10 border">
        <section class="stunning-header bg-dark-themes pt100 pb-5">
        </section>
        <div class="py-4" style=" padding: 25px 0px;" >
            <div class="w-full py-2 shadow-sm main-inbox border border-dark">
                <div class="inbox-heading" style="" >
                    <h2 class="rounded text-center" style="">Account Delete Request</h2>
                </div>
                <div class="w-full px-4 inbox-list" >
                    <div class="required w-full mb-5" >
                        <label class="mb-1" for="input-firstname">Name</label><br />
                        <input class="bg-remark-light outline-none border border-teal-800" style="padding: 12px 15px;"  type="text" name="name" placeholder="Name" />
                    </div>
                    <div class="required w-full mb-5">
                        <label class="control-label mb-1" for="email">Emaill Address</label><br />
                        <input style="padding: 12px 15px;"  type="email" placeholder="Email" class="bg-remark-light outline-none border border-teal-800" />
                    </div>
                    <div class="required w-full mb-5">
                        <label class="control-label mb-1" for="mobile_number">Mobile Number</label><br />
                        <input style="padding: 12px 15px;"  type="tel" placeholder="+91" class="bg-remark-light outline-none border border-teal-800" />
                    </div>
                    <div class="required col-sm-12">
                        <label class="control-label mb-1" for="mobile_number">Reason <span>*</span></label><br />
                        <textarea style="padding: 12px 15px;" class="bg-remark-light outline-none border border-teal-800" aria-label="With textarea"></textarea>
                    </div>
                </div>
                    <div class=" mb-3 mt-2 text-center" >
                        <button class="bg-teal-800 text-white px-10 py-3">Submit</button>
                    </div>
            </div>
        </div>
    </div>
    </div>
</template>

<style>
.main-inbox{
    width: 40%;
    top: 20%; left: 30%;
    /* background-color: #170052; */
    border-radius: 15px;
}

.img{
    border-radius: 50%;
}

.main-inbox p{
    font-size: 15px;
    margin-bottom: 5px;
    /* color: #545379; */
}

.inbox-list{
    width: 100%;
    justify-content: space-around;
}

.inbox-heading{
    font-size: 30px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    padding: 15px 0px;
}

.inbox-list input{
    /* background-color: #250073; */
}
.inbox-list textarea{
    /* background-color: #250073; */
}
</style>
