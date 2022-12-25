package com.cafeapp.usercontroller;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.cafeapp.entities.Customer;
import com.cafeapp.entities.Item;
import com.cafeapp.entities.ItemQuantity;
import com.cafeapp.entities.Order;
import com.cafeapp.helper.Bill;
import com.cafeapp.helper.ItemDesc;
import com.cafeapp.helper.Item_Quantity;
import com.cafeapp.helper.OrderList;
import com.cafeapp.repo.CustomerRepo;
import com.cafeapp.repo.ItemQuantityRepo;
import com.cafeapp.repo.ItemRepo;
import com.cafeapp.repo.OrderRepo;

@RestController
@RequestMapping("/user")
public class CustomerController {
	
	@Autowired
	CustomerRepo cust_repo;
	
	@Autowired
	OrderRepo ord_repo;
	
	@Autowired
	ItemRepo item_repo;
	
	@Autowired
	ItemQuantityRepo item_quan_repo;
	
	@SuppressWarnings("deprecation")
	@PostMapping("/post/order")
	public int postOrderData(@RequestBody ItemDesc itemDesc) {
		
		int price=0;
		System.out.println(itemDesc);
		Customer cust=new Customer();
		cust.setTb_no(itemDesc.getTb_no());
		cust.setName(itemDesc.getC_name());
		cust.setPhno(itemDesc.getPhno());
		List<Item> ll=new ArrayList<>();
		List<ItemQuantity> lq=new ArrayList<>();
		for(Item_Quantity item_qn:itemDesc.getItems()) {
			Item it=item_repo.getById(item_qn.getId());
			ItemQuantity itq=new ItemQuantity();
			
			itq.setItem_id(item_qn.getId());
			itq.setQuantity(item_qn.getQuantity());
			lq.add(itq);
			price+=(it.getPrice()*item_qn.getQuantity());
			ll.add(it);
//			lq.add(tp);
			item_quan_repo.save(itq);
			
		}
//		for(Item x:ll) {
//			System.out.println(x.getPrice());
//		}
		Order ord=new Order();
		ord.setLitems(ll);
		ord.setL_quan(lq);
		ord.setDate(new Date());
//		System.out.println(ord.getDate().getDate());
//		System.out.println(ord.getDate().getTime());
		ord.setStatus("ordered");
		ord.setAmount(price);
		ord.setTotal(price + ((2* ord.getLitems().get(0).getGst())/100 * price));
		cust.setOrder(ord);
		ord=ord_repo.save(ord);
		
		cust_repo.save(cust);
		
		return ord.getOrd_no();
		
	}
	
	
	
	@GetMapping("/get/status")
	public String getStatusByOrder(@RequestParam("ord_no") String o_no) {
		try {
			Optional<Order> ord = ord_repo.findById(Integer.parseInt(o_no));
			return ord.get().getStatus();
		}

		catch(Exception e) {
			return "not found";
		}
		
	}
	
	
	
	@GetMapping("/get/items")
	public List<Item> getItems(){
		
		return  item_repo.findAll();
	}
	
	@GetMapping("/get/bill")
	public Bill getBill(@RequestParam("ord_no") String ord_no) {
		Order o = ord_repo.getById(Integer.parseInt(ord_no));
		Bill bill = new Bill();
		bill.setC_id(o.getCustomer().getId());
		bill.setC_name(o.getCustomer().getName());
		bill.setDate(o.getDate());
		bill.setOrd_id(o.getOrd_no());
		bill.setStatus(o.getStatus());
		
		List<OrderList> o_list = new ArrayList<>();
		for(ItemQuantity iqe:o.getL_quan()) {
			@SuppressWarnings("deprecation")
			OrderList od=new OrderList(item_repo.getById(iqe.getItem_id()).getName(),iqe.getQuantity());
			od.setPrice(item_repo.getById(iqe.getItem_id()).getPrice());
			o_list.add(od);
		}
		bill.setOrderList(o_list);
		bill.setGst(o.getLitems().get(0).getGst());
		bill.setAmount(o.getAmount());
		
		
		return bill;
	}
	
}
